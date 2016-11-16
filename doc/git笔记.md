# 初始化的操作
1. 下载安装 node, git bash客户端

2. 用户名和邮箱配置分别在git bash里面输入如何命令:
   git config --global user.name "leekai"
   git config --global user.email "leekai@sina.com"
备注:上面是全局配置,只要是这台机器上的所有git仓库会使用刚才配置的用化名和邮箱 
当然也可以针对不同的git仓库配置不同的邮箱(但是我暂时还不会)

3.  新建一个空白目录或者在github上面clone一个下来, 进入到该目录路径下面执行 git init操作即可

4. 其他的操作在git bash客户端里面输入 git help就可以知道如何使用

# 常见的操作
1. 删除某个文件 比如要删除仓库里面的某个 a.md 文件可以直接 git rm a.md -f (记得要带上 a.md的准确路劲)
