### 初始化的操作
1. 下载安装 node, git bash客户端

2. 用户名和邮箱配置分别在git bash里面输入如何命令:
   git config --global user.name "leekai"
   git config --global user.email "leekai@sina.com"
备注:上面是全局配置,只要是这台机器上的所有git仓库会使用刚才配置的用化名和邮箱 
当然也可以针对不同的git仓库配置不同的邮箱(但是我暂时还不会)

3.  新建一个空白目录或者在github上面clone一个下来, 进入到该目录路径下面执行 git init操作即可

4. 其他的操作在git bash客户端里面输入 git help就可以知道如何使用

### 常见的操作
1. 删除某个文件 比如要删除仓库里面的某个 a.md 文件可以直接 git rm a.md -f (记得要带上 a.md的准确路径)

2. 将本地git仓库修改的内容推送到远程仓库上面使用如下命令：
   git remote add origin "git仓库地址" 让远程仓库和本地仓库建立一种链接关系其实就是 origin
   git push -u origin master  将本地内容真正的推送到远程的仓库master分支上

3. 生成 SSH Key 命令: ssh-keygen -t rsa-C "leekai89@sina.com" ("leekai89@sina.com" 邮箱地址)

# 常见的操作和错误提示
1. 输入 git remote add origin "https://github.com/leekai89/mypractice.git" (https://github.com/leekai89/mypractice.git github的仓库的地址)
提示错误:  remote origin already exists.
解决办法:
1. 先输入$ git remote rm origin

2. 再输入$ git remote add origin github的仓库的地址 就不会报错了！

### git bash 出现vim的时候怎么退出
> 如果是输出状态，首先Esc退出输入状态，然后Shift+;，再输入q!或wq!（不保存改动，wq!是保存文件的写入修改）退出 

