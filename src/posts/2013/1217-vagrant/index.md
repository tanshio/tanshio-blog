---
title: "Vagrant1.4でCentOSのIPアドレスが固定できない"
date: "2013-12-17"
path: "/blog/2013/12/vagrant-centos-ip/"
type: "blog"
categories: ["環境構築"]
tags: ["Vagrant"]
excerpt: "Vagrant1.4でCentOSのIPアドレスが固定できない"
ogp: "./ogp.png"
---

Vagrant1.4で、UbuntuではIPアドレスが固定できるのに、CentOSではIPアドレスが固定できなかった。 どうやらこれはVagrantのバグだったらしいので、解決策をメモ。

## IPアドレスが固定できない

```
config.vm.network :private_network, ip: "192.168.77.10"
```

Vagrantでは、上記のような感じでIPアドレスを固定できるはずなんだけど、仮想環境でeth1（確か）が動作しない。

## 解決策

```
/Applications/Vagrant/embedded/gems/gems/vagrant-1.4.0/plugins/guests/redhat/cap/configure_networks.rb
```

を下記の内容に書き換えればOK。（書き込み権限がない場合は書き込み権限を与える）

```$xslt
require "set"
require "tempfile"

require "vagrant/util/retryable"
require "vagrant/util/template_renderer"

module VagrantPlugins
  module GuestRedHat
    module Cap
      class ConfigureNetworks
        extend Vagrant::Util::Retryable
        include Vagrant::Util

        def self.configure_networks(machine, networks)
          network_scripts_dir = machine.guest.capability("network_scripts_dir")

          # Accumulate the configurations to add to the interfaces file as
          # well as what interfaces we're actually configuring since we use that
          # later.
          interfaces = Set.new
          networks.each do |network|
            interfaces.add(network[:interface])

            # Down the interface before munging the config file. This might fail
            # if the interface is not actually set up yet so ignore errors.
            machine.communicate.sudo(
              "/sbin/ifdown eth#{network[:interface]} 2> /dev/null", error_check: false)

            # Remove any previous vagrant configuration in this network interface's
            # configuration files.
            machine.communicate.sudo("touch #{network_scripts_dir}/ifcfg-eth#{network[:interface]}")
            machine.communicate.sudo("sed -e '/^#VAGRANT-BEGIN/,/^#VAGRANT-END/ d' #{network_scripts_dir}/ifcfg-eth#{network[:interface]} > /tmp/vagrant-ifcfg-eth#{network[:interface]}")
            machine.communicate.sudo("cat /tmp/vagrant-ifcfg-eth#{network[:interface]} > #{network_scripts_dir}/ifcfg-eth#{network[:interface]}")
            machine.communicate.sudo("rm /tmp/vagrant-ifcfg-eth#{network[:interface]}")

            # Render and upload the network entry file to a deterministic
            # temporary location.
            entry = TemplateRenderer.render("guests/redhat/network_#{network[:type]}",
                                            :options => network)

            temp = Tempfile.new("vagrant")
            temp.binmode
            temp.write(entry)
            temp.close

            machine.communicate.upload(temp.path, "/tmp/vagrant-network-entry_#{network[:interface]}")
          end

          # Bring down all the interfaces we're reconfiguring. By bringing down
          # each specifically, we avoid reconfiguring eth0 (the NAT interface) so
          # SSH never dies.
          interfaces.each do |interface|
            retryable(:on => Vagrant::Errors::VagrantError, :tries => 3, :sleep => 2) do
              # The interface should already be down so this probably
              # won't do anything, so we run it with error_check false.
              machine.communicate.sudo(
                "/sbin/ifdown eth#{interface} 2> /dev/null", error_check: false)

              # Add the new interface and bring it up
              machine.communicate.sudo("cat /tmp/vagrant-network-entry_#{interface} >> #{network_scripts_dir}/ifcfg-eth#{interface}")
              machine.communicate.sudo("ARPCHECK=no /sbin/ifup eth#{interface} 2> /dev/null")
            end

            machine.communicate.sudo("rm /tmp/vagrant-network-entry_#{interface}")
          end
        end
      end
    end
  end
end
```

ここから参照しました。 
[Vagrant 1.4.0 で private_network を指定しているとエラーになる件](http://d.hatena.ne.jp/akishin999/20131213/1386929611)
