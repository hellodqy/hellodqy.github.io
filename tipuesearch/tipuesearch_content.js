var tipuesearch = {"pages":[{"title":"Github Page绑定个人域名","url":"/post/fa674e5f.html","text":"前言在之前的配置Twikoo评论一文中我们购买了自己的域名，当时只用了二级域名解决Vercel域名被墙的问题，现在我们把Github Page的域名修改为我们自己的域名 DNS解析(以阿里云为例)阿里云首页打开控制台 点击图片中的云解析 点击你购买的域名 点击添加记录 我们需要添加两条记录： 记录类型：CNAME 主机记录：@ 解析请求来源：保持默认 记录值：网站域名，例如我的是：hellodqy.github.io TTL：10分钟 记录类型：CNAME 主机记录：www 解析请求来源：保持默认 记录值：网站域名 TTL：10分钟 添加CNAME文件打开Blog根目录&#x2F;source，新建一个文件名为CNAME的无后缀文件，填入你购买的个人域名，不需要添加https:&#x2F;&#x2F;前缀，例如我的是： 1dqywy.top Github Page添加个人域名进入.github.io仓库，打开settings 打开Pages选项 下拉页面，找到Custom domain并填入你购买的个人域名，勾选Enforce HTTPS 注意：这里需要等待一段加载时间才能勾选Enforce HTTPS 完成以后即可通过你购买的个人域名访问你的网站了 解决部署后需要重新在Github绑定域名的问题打开Blog根目录的站点配置文件_config.yml，搜索skip_render并填写CNAME使每次部署的时候CNAME不被渲染 1skip_render: CNAME","tags":"博客"},{"title":"实现网站动态标题","url":"/post/15286781.html","text":"添加脚本文件打开Blog根目录&#x2F;source&#x2F;js&#x2F;title.js，路径中缺失的文件夹或文件直接新建即可 写入下列代码 1234567891011121314151617//动态标题var OriginTitile = document.title;var titleTime;document.addEventListener(&#x27;visibilitychange&#x27;, function () &#123; if (document.hidden) &#123; //离开当前页面时标签显示内容 document.title = &#x27;不要走嘛(´•̥̥̥ω•̥̥̥`)&#x27;; clearTimeout(titleTime); &#125; else &#123; //返回当前页面时标签显示内容 document.title = &#x27;欢迎回来(✪ω✪)&#x27;; //两秒后变回正常标题 titleTime = setTimeout(function () &#123; document.title = OriginTitile; &#125;, 2000); &#125;&#125;); 引用脚本文件打开主题配置文件_config.butterfly.yml并按下列格式补充完整 123inject: bottom: - &lt;script async src=&quot;/js/title.js&quot;&gt;&lt;/script&gt; hexo三连查看效果","tags":"博客"},{"title":"个人卡片实现渐变色","url":"/post/25226bb5.html","text":"添加代码打开Blog根目录&#x2F;source&#x2F;css&#x2F;custom.css，路径中的css文件夹或custom.css文件没有的话就新建，写入如下代码： 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061/* 侧边栏个人信息卡片动态渐变色 */#aside-content &gt; .card-widget.card-info &#123; background: linear-gradient( -45deg, #e8d8b9, #eccec5, #a3e9eb, #bdbdf0, #eec1ea ); box-shadow: 0 0 5px rgb(66, 68, 68); position: relative; background-size: 400% 400%; -webkit-animation: Gradient 10s ease infinite; -moz-animation: Gradient 10s ease infinite; animation: Gradient 10s ease infinite !important;&#125;@-webkit-keyframes Gradient &#123; 0% &#123; background-position: 0% 50%; &#125; 50% &#123; background-position: 100% 50%; &#125; 100% &#123; background-position: 0% 50%; &#125;&#125;@-moz-keyframes Gradient &#123; 0% &#123; background-position: 0% 50%; &#125; 50% &#123; background-position: 100% 50%; &#125; 100% &#123; background-position: 0% 50%; &#125;&#125;@keyframes Gradient &#123; 0% &#123; background-position: 0% 50%; &#125; 50% &#123; background-position: 100% 50%; &#125; 100% &#123; background-position: 0% 50%; &#125;&#125;/* 黑夜模式适配 */[data-theme=&quot;dark&quot;] #aside-content &gt; .card-widget.card-info &#123; background: #191919ee;&#125;/* 个人信息Follow me按钮 */#aside-content &gt; .card-widget.card-info &gt; #card-info-btn &#123; background-color: #3eb8be; border-radius: 8px;&#125; 引入代码打开主题配置文件_config.butterfly.yml，搜索inject并按下列格式补充完整即可 123inject: head: - &lt;link rel=&quot;stylesheet&quot; href=&quot;/css/custom.css&quot;&gt; hexo三连查看效果","tags":"博客"},{"title":"添加看板娘","url":"/post/2fd28ec8.html","text":"前言谁不想拥有一只萌萌的看板娘呢~ 我安装的是博客自带的看板娘，比较推荐这个，消耗资源比较少，虽然不会说话也不能换装，但是会乖乖地盯着你的鼠标~ 安装打开Blog根目录cmd并输入以下命令 1npm install --save hexo-helper-live2d 我输入命令以后下载进度一直卡着，多重试几次就好了，然后报了一些看不懂的错，我按照它的建议输入了两条命令 1npm audit fix 1npm audit fix --force 这两条命令之后报的错就不用管啦 配置打开Blog根目录下的站点配置文件_config.yml搜索live2d，没有的话就将下列内容复制到最底部 123456789101112131415161718192021222324# Live2D## https://github.com/EYHN/hexo-helper-live2dlive2d: enable: true #开关插件版看板娘 scriptFrom: local # 默认 pluginRootPath: live2dw/ # 插件在站点上的根目录(相对路径) pluginJsPath: lib/ # 脚本文件相对与插件根目录路径 pluginModelPath: assets/ # 模型文件相对与插件根目录路径 # scriptFrom: jsdelivr # jsdelivr CDN # scriptFrom: unpkg # unpkg CDN # scriptFrom: https://npm.elemecdn.com/live2d-widget@3.x/lib/L2Dwidget.min.js # 你的自定义 url tagMode: false # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中 debug: false # 调试, 是否在控制台输出日志 model: use: live2d-widget-model-wanko # npm-module package name # use: wanko # 博客根目录/live2d_models/ 下的目录名 # use: ./wives/wanko # 相对于博客根目录的路径 # use: https://npm.elemecdn.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json # 你的自定义 url display: position: right #控制看板娘位置 width: 150 #控制看板娘大小 height: 300 #控制看板娘大小 mobile: show: true # 手机中是否展示 更换形象预览并挑选一个喜欢的看板娘形象，我选择的是一个白帽子小孩：live2d-widget-model-koharu 看板娘模型预览：(4条消息) Hexo添加Live2D看板娘+模型预览 打开Blog根目录cmd，复制你选择的看板娘编码并执行命令，注意替换编码1npm install --save live2d-widget-model-koharu 打开Blog根目录下的站点配置文件_config.yml搜索model，将其修改为你的看板娘编码 123model: use: live2d-widget-model-koharu # 默认为live2d-widget-model-wanko hexo三连即可在本地预览效果 1hexo cl &amp;&amp; hexo g &amp;&amp; hexo s 卸载看板娘打开Blog根目录cmd并输入以下命令 12npm uninstall hexo-helper-live2d #卸载看板娘插件npm uninstall live2d-widget-model-modelname #卸载看板娘模型。记得替换modelname为看板娘名称 打开Blog根目录下的站点配置文件_config.yml搜索live2d，将该配置项注释掉即可","tags":"博客"},{"title":"小岛面积","url":"/post/1ee68337.html","text":"题目：用一个二维方阵（最小为3X3，最大为9X9）表示一片海域。方阵中的元素只由0和1组成。1表示海岸线。计算由海岸线围起来的小岛面积（即：由1围起来的区域中0的个数） 上述方阵表示的海域满足下面两个要求： 1、小岛只有一个 2、用1表示的海岸线肯定可以封闭成一个小岛，但有可能是凸的，也有可能是凹的，所以在判断时：对于方阵中的任意一个元素0，如果其位于同一行上的两个1之间，并且位于同一列上的两个1之间，则该元素肯定在1围起来的区域中。不符合该规定的其它情况不考虑。 样例： 输入： 6 0 0 0 1 0 0 0 0 1 0 1 0 0 1 0 0 0 1 1 0 0 0 1 0 1 0 1 0 1 0 1 1 0 1 1 1 输出： 9 思路：边界上的0一定不被1包围，将其值改为2，与2有接触的0被感染成2，不断感染，最后幸存的0是被1包围的 12345678910111213141516171819202122232425262728293031323334353637383940414243444546#include &lt;iostream&gt;using namespace std;int main()&#123; int n; int sea[9][9]; int sum = 0; cin &gt;&gt; n; for (int i = 0; i &lt; n; i++) &#123; for (int j = 0; j &lt; n; j++) &#123; cin &gt;&gt; sea[i][j]; &#125; &#125; for (int k = 0; k &lt; 5; k++) // 矩阵最大为9x9, 最多的情况是中间的0不被包含，则需要侵蚀5次 &#123; for (int i = 0; i &lt; n; i++) &#123; for (int j = 0; j &lt; n; j++) &#123; if (sea[i][j] == 0) &#123; if (i == 0 || i == n - 1 || j == 0 || j == n - 1) sea[i][j] = 2; else if (sea[i][j - 1] == 2 || sea[i - 1][j] == 2 || sea[i][j + 1] == 2 || sea[i + 1][j] == 2) sea[i][j] = 2; &#125; &#125; &#125; &#125; for (int i = 0; i &lt; n; i++) &#123; for (int j = 0; j &lt; n; j++) &#123; if (!sea[i][j]) sum++; &#125; &#125; cout &lt;&lt; sum;&#125;","tags":"刷题"},{"title":"Yura's Smile","url":"/post/c020e7d8.html","text":"题目After holding one team contest, boy Yura got very tired and wanted to change his life and move to Japan. In honor of such a change, Yura changed his name to something nice. Fascinated by this idea he already thought up a name s consisting only of characters “_” and “^”. But there’s a problem — Yura likes smiley faces “^_^” and “^^”. Therefore any character of the name must be a part of at least one such smiley. Note that only the consecutive characters of the name can be a smiley face. More formally, consider all occurrences of the strings “^_^” and “^^” in the string s. Then all such occurrences must cover the whole string s, possibly with intersections. For example, in the string “^^__^_^^__^” the characters at positions 3,4,9,10 and 11 are not contained inside any smileys, and the other characters at positions 1,2,5,6,7 and 8 are contained inside smileys. In one operation Jura can insert one of the characters “_” and “^” into his name s (you can insert it at any position in the string). He asks you to tell him the minimum number of operations you need to do to make the name fit Yura’s criteria. InputEach test consists of multiple test cases. The first line contains a single integer t(1≤t≤100) —the number of test cases. The description of test cases follows. The first and only line of each test case contains a single string s (1≤|s|≤100), consisting of characters “_” and “^”, — the name to change. OutputFor each test case, output a single integer — the minimum number of characters you need to add to the name to make it fit for Yura. If you don’t need to change anything in the name, print 0. Example 第一次做英文编程题，看得有点懵，大概是在说，输入多行字符串，每个字符串由^或下划线组成，要求每个字符串的每个字符都能和相邻的字符组成^^或^_^，问需要添加的 ^ 和下划线的最小数目是多少 我的思路是，遍历字符串，搜索下划线，找到就观察其相邻两边是否有 ^ ，两边都有就直接删除掉这个下划线；只有一个就计数加一，并删除这个下划线；一个都没有就计数加二，删除该下划线并在该位置插入一个 ^；只有一个字符的字符串单独处理 1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677787980818283848586#include &lt;iostream&gt;#include &lt;string&gt;using namespace std;int main()&#123; string str; int n, pos, res[100] = &#123; 0 &#125;; cin &gt;&gt; n; getline(cin, str); // 把前面cin遗留的结束符处理掉 for (int i = 0; i &lt; n; i++) &#123; getline(cin, str); if (str == &quot;^&quot;) res[i]++; while ((pos = str.find(&#x27;_&#x27;)) != string::npos) // 字符串中没有&#x27;_&#x27;时停止 &#123; if (0 == pos) // &#x27;_&#x27;在第一个位置 &#123; if (&#x27;^&#x27; == str[pos + 1]) &#123; res[i]++; str.erase(pos, 1); // 删除&#x27;_&#x27; break; &#125; else &#123; str.erase(pos, 1); // 删除&#x27;_&#x27; str.insert(pos, 1, &#x27;^&#x27;); res[i] += 2; &#125; &#125; else if (str.size() - 1 == pos) // &#x27;_&#x27;在最后一个位置 &#123; if (&#x27;^&#x27; == str[pos - 1]) &#123; res[i]++; str.erase(pos, 1); // 删除&#x27;_&#x27; break; &#125; else &#123; str.erase(pos, 1); // 删除&#x27;_&#x27; str.insert(pos, 1, &#x27;^&#x27;); res[i] += 2; &#125; &#125; else // &#x27;_&#x27;在中间 &#123; if (&#x27;^&#x27; == str[pos - 1]) &#123; if (&#x27;^&#x27; == str[pos + 1]) &#123; str.erase(pos, 1); &#125; else &#123; res[i]++; str.erase(pos, 1); &#125; &#125; else if (&#x27;^&#x27; != str[pos - 1]) &#123; if (&#x27;^&#x27; == str[pos + 1]) &#123; str.erase(pos, 1); res[i]++; &#125; else &#123; res[i] += 2; str.erase(pos, 1); str.insert(pos, 1, &#x27;^&#x27;); &#125; &#125; &#125; &#125; &#125; for (int i = 0; i &lt; n; i++) cout &lt;&lt; res[i] &lt;&lt; endl; return 0;&#125;","tags":"刷题"},{"title":"Twikoo评论设置邮箱提醒","url":"/post/e988d7ce.html","text":"添加Twikoo请查看文章添加Twikoo实现博客在线评论 安装完成后可以对Twikoo进行以下配置： 设置邮箱提醒设置邮箱提醒可以在有小伙伴给你的文章评论时向你发送邮件让你及时知道 开通POP3&#x2F;SMTP服务(以QQ邮箱为例，其他邮箱类比) 在电脑端打开QQ邮箱并点击最上方的设置 点击帐户 下拉找到POP3&#x2F;SMTP服务并点击开启服务，按指示验证即可 注意：验证完毕以后会出现授权码，记得保存一会要用 ​ 如果不小心忘记保存授权码可以重新生成并保存 配置邮件通知服务随便打开一篇文章，拉到底部，登录Twikoo管理面板 下拉找到邮件通知选项 可以参考我的配置，没填的就是用的默认SMTP_PASS填刚刚生成的授权码 填写完成以后点击邮件通知测试，收到来自Twikoo的邮件就说明配置正确 到评论区发送一条评论就可以在邮箱收到提醒啦","tags":"博客"},{"title":"添加Twikoo实现博客在线评论——2023最新版","url":"/post/d0d1b7a9.html","text":"Vercel部署注意：按照视频教程中执行到云函数运行成功的步骤时请返回本教程 部署方式：https://www.bilibili.com/video/BV1Fh411e7ZH 参考Twikoo文档：https://twikoo.js.org/ 视频中下一步要求我们点击DOMAINS链接，但是这个链接已经被墙了，无法访问到，我们需要更改DOMAINS 申请个人域名阿里云、腾讯云、华为云都可以，我在阿里云申请的 主页搜索域名注册，在搜索记录里点击域名注册 自定义想要的域名 购买域名 域名不需要备案，因为我们只是需要一个二级域名 生成二级域名 在阿里云控制台添加子域名解析记录首页打开控制台 点击图片中的云解析 点击你购买的域名 点击添加记录 记录类型选择CNAME 主机记录随便写，我填的是blog 记录值设置为你的网站域名，例如我的是：hellodqy.github.io 点击确认 现在已经生成了一个二级域名，但是这个域名并不能打开任何网页，因为它没有与Github Page绑定，本教程不需要绑定！想绑定的话直接去Github的仓库找到CNAME文件，没有的话就自己创建一个，将自己的二级域名添加到文件第一行（内容必须为一行）,此时在地址栏输入自己的子域名就可以跳转到 Github Page 页面了 更改DOMAINS打开Vercel 将刚刚申请的二级域名填进去，点击Save 然后会出现报错：要求我们到DNS Provider去添加记录 回到这个界面，先删除记录值为你的网站域名的那条记录，再次添加记录 注意：如果你按照我前面给的Github绑定二级域名教程到Github生成了CNAME文件的话，得去删掉CNAME文件 按照报错提示填：类型：CNAME；主机记录：刚刚填的是什么，现在就填什么，比如刚刚申请二级域名我填的是blog，现在就填blog 主要是记录值要改，填报错提示中的value值，点击确认 回到Vercel的这个界面，点击上方的Deployments选项 找到current记录，点击三个点，点击Redeploy 看到DOMAINS是你设置的二级域名就修改正确了 过几分钟，点击查看新的DOMAINS网页中出现云函数运行成功即可，如图： 获取Vercel的环境ID(enVId)1https:// + DOMAINS(就是你设置的二级域名) 前端部署修改主题配置文件_config.butterfly.yml，搜索twikoo，你只需要把获取到Vercel的环境 ID (envId) 填写到配置上去就行，其他不改： 12345twikoo: envId: region: visitor: false option: 然后搜索comments，设置评论应用为： 12comments: use: twikoo 12注意：最新评论只会在刷新时才会去读取，并不会实时变化由于 API 有 访问次数限制，为了避免调用太多，主题默认存取期限为 10 分鐘。也就是説，调用后资料会存在 localStorage 里，10 分鐘内刷新网站只会去 localStorage 读取资料。 10 分鐘期限一过，刷新页面时才会去调取 API 读取新的数据。（ 3.6.0 新增了 storage 配置，可自行配置缓存时间） 在侧边栏显示最新评论板块 修改主题配置文件 _config.butterfly.yml 1234567# Aside widget - Newest Commentsnewest_comments: enable: true sort_order: # Don&#x27;t modify the setting unless you know how it works limit: 6 storage: 10 # unit: mins, save data to localStorage avatar: true 登录Twikoo管理面板：先把刚刚的所有修改保存并部署到本地 打开网站随便一篇文章翻到页面底部，点击设置并注册管理员密码 评论设置完毕，测试一下吧~","tags":"博客"},{"title":"Hexo集成Algolia实现网站搜索引擎","url":"/post/fe591630.html","text":"创建 Alogolia Index首先登陆进入 Algolia 官网，我们可以使用 GitHub 或 Google 帐号登录。 创建一个Index，随便取一个名字 配置API Key 接下来我们需要配置 Algolia——API Keys 到我们自己的 hexo 站点中，关联两者，使得 Algolia 能够搜集我们 hexo 站点的数据通过 API 发送给 Aloglia 回到首页打开API Keys，其中的 Application ID 、Search-Only API Key、Admin API KEY信息将会被用到 首先我们需要修改Blog根目录下的 _config.yml： 1234algolia: applicationID: &#x27;你的Applicaiton ID&#x27; apiKey: &#x27;你的Search-Only API Key&#x27; indexName: &#x27;创建的索引名称&#x27; 然后我们需要配置一个名称为 HEXO_ALGOLIA_INDEXING_KEY，内容为 Alogolia 网页中 Admin API KEY 的环境变量，在Blog根目录下进行Git Bash并输入下列命令： 1export HEXO_ALGOLIA_INDEXING_KEY=你的Admin API KEY 通过 Hexo Aloglia 获取站点数据前面我们创建了 Index，但是此时为空，不包含任何数据。我们需要安装 Hexo Aloglia 扩展，这个扩展的功能是搜集站点的内容并通过 API 发送给 Aloglia 1npm install --save hexo-algolia 安装完成后，在 hexo 站点根目录下执行下列命令来搜集数据更新到我们刚创建的 Index 中： 1hexo algolia 如上图所示则代表成功将 hexo 站点中的数据发送到了 Alogolia 的 Index 中，我们可以在网页中看到所有的数据 主题集成Algolia：更改主题配置文件的_config.yml(注意是主题配置文件的_config.yml，我的是Blog&#x2F;themes&#x2F;butterfly目录下的，不是Blog根目录的_config.yml)，找到 Algolia Search 配置部分(文件当中有，直接搜索)，将enable 改为true 即可： 12345# Algolia searchalgolia_search: enable: true hits: per_page: 6 修改搜索目录之前一直没改站点URL，昨晚折腾到一点过也没搞好，今早遇到大佬指点才解决 如果你能搜索到对应文章但是点击搜索记录却是这样的页面 那应该是你的站点URL没有修改，打开Blog根目录下的_config.yml，将Url里面的网址修改为你的域名 重新部署1hexo cl &amp;&amp; hexo g &amp;&amp; hexo s 注意：每次对网站内容修改以后都需要更新Algolia1hexo algolia","tags":"博客"},{"title":"博客美化","url":"/post/8f1335fc.html","text":"Butterfly 主题安装1git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly 这里面如果报错，如下图所示 执行下列命令： 12git config --global --unset http.proxy git config --global --unset https.proxy 应用主题Blog根目录下找到_config.yml文件 搜索找到theme，将landscape改为butterfly 安装插件如果你没有 pug 以及 stylus 的渲染器，请下载安装： 1npm install hexo-renderer-pug hexo-renderer-stylus --save 网站副标题可设置主页中展示的网站副标题或者自己喜欢的座右铭 修改主题配置文件_config.butterfly.yml 1234567891011121314151617181920# Sitetitle: Hexosubtitle: enable: true # Typewriter Effect (打字效果) effect: true # loop (循環打字) loop: true # source 調用第三方服務 # source: false 關閉調用 # source: 1 調用一言網的一句話（簡體） https://hitokoto.cn/ # source: 2 調用一句網（簡體） http://yijuzhan.com/ # source: 3 調用今日詩詞（簡體） https://www.jinrishici.com/ # subtitle 會先顯示 source , 再顯示 sub 的內容 # source: 3 # 如果關閉打字效果，subtitle 只會顯示 sub 的第一行文字 sub: - 我双手合十的愿望里永远有你。 - 穿越人海，只为与你相拥。 - 手握日月摘 ♥ 悦。 侧边栏设置修改主题配置文件_config.butterfly.yml，搜索aside 带有card_前缀的是显示在网页右边的那一竖列的内容 1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253# aside (側邊欄)# --------------------------------------aside: enable: true hide: false button: true mobile: true # display on mobile position: right # left or right display: archive: true tag: true category: true card_author: enable: true description: button: enable: true icon: fab fa-github text: Follow Me link: https://github.com/hellodqy card_announcement: enable: true content: DQY &amp; WY card_recent_post: enable: true limit: 5 # if set 0 will show all sort: date # date or updated sort_order: # Don&#x27;t modify the setting unless you know how it works card_categories: enable: true limit: 8 # if set 0 will show all expand: none # none/true/false sort_order: # Don&#x27;t modify the setting unless you know how it works card_tags: enable: true limit: 40 # if set 0 will show all color: false orderby: random # Order of tags, random/name/length order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending sort_order: # Don&#x27;t modify the setting unless you know how it works card_archives: enable: true type: monthly # yearly or monthly format: MMMM YYYY # eg: YYYY年MM月 order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending limit: 8 # if set 0 will show all sort_order: # Don&#x27;t modify the setting unless you know how it works card_webinfo: enable: true post_count: true last_push_date: true sort_order: # Don&#x27;t modify the setting unless you know how it works 首页文章数目首页显示的文章数目在Blog根目录下的系统配置文件修改，打开_config.yml搜索index_generator per_page可以修改显示的文章数目 12345678# Home page setting# path: Root path for your blogs index page. (default = &#x27;&#x27;)# per_page: Posts displayed per page. (0 = disable pagination)# order_by: Posts order. (Order by date descending by default)index_generator: path: &#x27;&#x27; per_page: 5 order_by: -date 访问人数修改主题配置文件_config.butterfly.yml，搜索busuanzi 1234busuanzi: site_uv: true site_pv: true page_pv: true 运行时间修改主题配置文件_config.butterfly.yml，搜索runtimeshow 123456runtimeshow: enable: true publish_date: 6/7/2018 00:00:00 ##网页开通时间 #格式: 月/日/年 时间 #也可以写成 年/月/日 时间 字数统计进入Blog根目录并执行 1npm install hexo-wordcount —save or yarn add hexo-wordcount 修改主题配置文件_config.butterfly.yml，搜索wordcount 12345wordcount: enable: true post_wordcount: true min2read: true total_wordcount: true 公告两个小人在 Blog/themes/Butterfly/layout/includes/widget/card_announcement.pug 下添加如下代码： 1234567891011121314151617 .xpand(style=&#x27;height:200px;&#x27;) canvas.illo(width=&#x27;800&#x27; height=&#x27;800&#x27; style=&#x27;max-width: 200px; max-height: 200px; touch-action: none; width: 640px; height: 640px;&#x27;)script(src=&#x27;https://fastly.jsdelivr.net/gh/xiaopengand/blogCdn@latest/xzxr/twopeople1.js&#x27;)script(src=&#x27;https://fastly.jsdelivr.net/gh/xiaopengand/blogCdn@latest/xzxr/zdog.dist.js&#x27;)script#rendered-js(src=&#x27;https://fastly.jsdelivr.net/gh/xiaopengand/blogCdn@latest/xzxr/twopeople.js&#x27;)style. .card-widget.card-announcement &#123; margin: 0; align-items: center; justify-content: center; text-align: center; &#125; canvas &#123; display: block; margin: 0 auto; cursor: move; &#125; 缩进参考： 导航菜单修改主题配置文件_config.butterfly.yml，去掉前面的井号就是启用该选项 1234567891011121314menu: 首页: / || fas fa-home 归档: /archives/ || fas fa-archive 摸鱼||fas fa-fish: 游戏: /moyu/ || fas fa-gamepad 工具: /tools/ || fas fa-tools 蓝桥: /lanqiao/ || fas fa-folder-open 标签: /tags/ || fas fa-tags # 分类: /categories/ || # List||fas fa-list: # Music: /music/ || fas fa-music # Movie: /movies/ || fas fa-video 友人帐: /link/ || fas fa-link 关于我: /about/ || fas fa-heart 关键页面生成博客有一些关键页面需要手动生成。 标签页进入Blog根目录cmd执行 1hexo new page tags 打开 source/tags/index.md 文件，修改如下 12345---title: 标签date: 2022-03-11 12:53:45type: &quot;tags&quot;--- 分类页进入Blog根目录cmd执行 1hexo new page categories 打开source&#x2F;categories&#x2F;index.md文件，修改如下 12345---title: 分类date: 2022-03-11 12:56:06type: &quot;categories&quot;--- 背景图片参考 https://wallhaven.cc/ https://wall.alphacoders.com/ https://bz.zzzmh.cn/index 网站美化：http://haiyong.site/post/22e1d5da.html 背景图设置顶部图 配置 含义 index_img 主页的 top_img default_top_img 默认的 top_img，当页面的 top_img 没有配置时，会显示 default_top_img archive_img 归档页面的 top_img tag_img tag 子页面 的 默认 top_img tag_per_img tag 子页面的 top_img，可配置每个 tag 的 top_img category_img category 子页面 的 默认 top_img category_per_img category 子页面的 top_img，可配置每个 category 的 top_img 修改主题配置文件_config.butterfly.yml ctrl+f直接搜索index_img 1index_img: 图片链接(例如: https://s1.ax1x.com/2023/04/25/p9uqhKU.jpg) tag_per_img 和 category_per_img 是 3.2.0 新增的内容，可对 tag 和 category 进行单独的配置 并不推荐为每个 tag 和每个 category 都配置不同的顶部图，因为配置太多会拖慢生成速度 footer背景修改主题配置文件_config.butterfly.yml 12# footer是否显示图片背景(与 top_img一致)footer_bg: true 背景图打开主题配置文件的_config.yml搜索background，修改background后面的链接即可 注意：链接一定要用url()括起来！！！如果用纯色的话，色号要用单引号括起来，例如：’#add2c2’ 打字效果修改主题配置文件_config.butterfly.yml，搜索activate-power-mode 1234567# Typewriter Effect (打字效果)# https://github.com/disjukr/activate-power-modeactivate_power_mode: enable: true colorful: true # open particle animation (冒光特效) shake: true # open shake (抖動特效) mobile: false 鼠标点击效果修改主题配置文件_config.butterfly.yml 烟花，搜索fireworks zIndex：-1表示烟火效果在底部；9999表示效果在前面 1234fireworks: enable: true zIndex: 9999 # -1 or 9999 mobile: false 爱心，搜索click_heart 1234# 点击出現爱心click_heart: enable: true mobile: false 搜索ClickShowText 12345678910# 点击出现文字，文字可自行修改ClickShowText: enable: false text: - I - LOVE - YOU fontSize: 15px random: false # 文字随机显示 mobile: false 打赏修改主题配置文件_config.butterfly.yml，搜索reward 12345678910# Sponsor/rewardreward: enable: true QR_code: - img: /img/wechat.jpg link: text: 微信 - img: /img/alipay.jpg link: text: 支付宝","tags":"博客"},{"title":"博客撰写与发布","url":"/post/c2ec21ed.html","text":"Typora下载与配置下载与破解教程：Typora 1.4.8 – 2022最新Typora破解激活教程！你的Markdown编辑器！ - 郭炫韩Coding - 博客园 (cnblogs.com) 文件夹介绍 _config.yml：俗称站点配置文件，很多与博客网站的格式、内容相关的设置都需要在里面改。 node_modules:存储Hexo插件的文件，可以实现各种扩展功能。一般不需要管。 scaffolds：模板文件夹，里面的post.md文件可以设置每一篇博客的模板。具体用起来就知道能干嘛了。 source：非常重要。所有的个人文件都在里面！ themes：主题文件夹，可以从Hexo主题官网或者网上大神的Github主页下载各种各样美观的主题，让自己的网站变得逼格高端的关键！ 生成新文章1npm i hexo-deployer-git 1hexo new post &quot;新建博客文章名&quot; 1hexo cl &amp;&amp; hexo g &amp;&amp; hexo s 文章标题与封面 发布博客 清理静态缓存 1hexo cl 生成 1hexo g 本地部署 1hexo s ​ 部署以后打开一个浏览器，在网址栏输入localhost:4000&#x2F;即可看到网站更新 部署到Github 1hexo d","tags":"博客"},{"title":"Hexo+Github搭建个人博客","url":"/post/405e7e90.html","text":"啊~磕磕绊绊终于搭好了，分享一下我的搭建过程和遇到的问题与解决方案： 安装并配置Node.js注意： 没有需求千万不要安装cnpm！(参考文章第五步有一个按需安装cnpm) cmd全程使用管理员模式打开 参考文章：https://blog.csdn.net/weixin_52799373/article/details/123840137 cmd管理员模式下执行下述命令 1npm install -g hexo-cli 安装并配置Git这个没什么坑，照着教程做就好 Git教程：https://www.cnblogs.com/xueweisuoyong/p/11914045.html 创建Github仓库 呐，这里一定要注意，仓库名称一定得是你的Github用户名.github.io 例如：你的Github用户名叫做helloworld，那么仓库名称就应该设置为helloworld.github.io 另外，访问权限得设置成Public，设成Private不得行！ 生成Github SSH Token注意：生成的Token记得复制并保存下来 Expiration是这个Token的使用期限，我偷懒就爱选择No expiration(永不过期) 权限全勾上就好 使用SSH Token 删除远程仓库地址 1git remote remove origin 检查是否删除成功 1git remote -v 没有输出证明删除成功 链接远程仓库 注意：不要直接复制，SSH密钥粘贴刚刚保存的Token，用户名和仓库名记得替换成你自己的 1git remote add origin https://SSH密钥@github.com/用户名/仓库名.git 完成后再次输入第二步的命令，看到fetch和pull的网址里面出现有生成SSH Token就设置成功了 1git remote -v 生成SSH Keys执行下述命令，提示选择y&#x2F;n就输入y，没有就一路回车 1ssh-keygen -t rsa -C &quot;你的邮箱地址&quot; 找到密钥位置并复制 测试ssh是否绑定成功 1ssh -T git@github.com 如果问你yes&#x2F;no直接yes 本地访问博客 创建一个Blog文件夹并启用Git Bash Here 初始化hexo 1hexo init 这里折腾了好久，一直显示command not found，重装了好几次node.jx，分析应该是前面安装了cnpm导致hexo的存储位置被改掉了 解决：前面加一个npx就好了，还是不行的话就自行百度谷歌吧 这里使用npx hexo … 的话，以后所有hexo命令都需要加上npx 1npx hexo init 生成本地的hexo页面 1hexo s 访问 浏览器输入： 1http://localhost:4000/ ​ ctrl+c关闭服务器 上传Blog到Github修改-config.yml文件 打开该文件并修改内容： 1234deploy: type: git repository: 你的github地址 branch: main 安装hexo-deployer-git 自动部署发布工具1npm install hexo-deployer-git --save 生成页面 1hexo g 本地文件上传到Github 1hexo d 注意：中间会出现登录界面，复制前面生成的SSH Token粘贴进去就好 注意：网络报错多次尝试就好 访问Github博客浏览器网址输入 1https://用户名.github.io/ 这一步折腾最久，做好的html网页传到Github后，用户名.github.io打不开，报错404，如图 解决：一开始试了很多网上的办法，比如点击页面中间的read the full documention然后跟着里面的步骤操作，没有效果，但是检查了很多遍仓库配置都没有问题，后来发现只是workflow一直没有启动，刷新一下仓库配置就可以了 打开.github.io仓库并点击Setiings 点击右侧菜单的Pages并重新选择Source和Branch，我当时配置是对的就没有改，但是保持原来的配置只是重新选择并保存一下可以刷新配置，邮箱就收到workflow启用的邮件了~ 博客搭建完毕~","tags":"博客"},{"url":"","text":"","tags":"","title":""},{"url":"","text":"","tags":"","title":""},{"url":"","text":"","tags":"","title":""},{"url":"","text":"","tags":"","title":""},{"url":"","text":"","tags":"","title":""},{"url":"","text":"","tags":"","title":""}]}