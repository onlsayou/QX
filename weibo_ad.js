hostname = greasyfork.org, openuserjs.org, trade-acs.m.taobao.com, *.*apps.com, bea.sportq.com, api.meiyan.com, *.gao1gps.cn, avoscloud.com, app.flashdown365.com, m.samh.xndm.tech, mob2015.kekenet.com, api.m.jd.com, ios.prod.ftl.netflix.com, vipapi.jxedt.com, api.interpreter.caiyunai.com, pocketlists.com, book.haitunwallet.com, mubu.com, app.xunjiepdf.com, miaow.yiyongcad.com, api.lennou.com, api.gkocr.com, vira.llsapp.com, commerce-.*api.faceu.mobi, commerce-api.faceu.mobi, pan.baidu.com, api.revenuecat.com, api.rr.tv, editorapi.115.com, dida365.com, ticktick.com, api.lakecoloring.com, ctrl.playcvn.com, dict.eudic.net, m.client.10010.com, api.wakamoment.ga, *.bh3.com, api.diyidan.net, api.flexibits.com, api.jiaonizuocai.com, api.sololearn.com, tncj.hortorgames.com, bkcd.b-cdn.net, souhu.mett.me, ayk.tmdidi.com, m.pearkin.com, www.baidu.com2.club, claritywallpaper.com, bookapi.ihuman.com, rest.zhibo.tv, note.youdao.com, billing.peakcloud.org, api.ithome.com, www.xmind.cn, *.arten.cn, api.weiqire.com, api.shimo.im, pay.wecut.com, *.videostarapp.com, app.api.versa-ai.com, *.bjxkhc.com, api.591master.com, jdytv.cn, user.shywck.com, *.xunjie*.com, api.psy-1.com, snailsleep.net, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, mp.weixin.qq.com, api.bilibili.com, app.bilibili.com, api.zhihu.com, link.zhihu.com, aweme*.snssdk.com, *.kuwo.cn, vip1.kuwo.cn, *.xiao*.com, *.xiaoxiao*.com, *.tiktokv.com, *.musical.ly, *.amemv.com, p.du.163.com, getuserinfo.321mh.com, getuserinfo-globalapi.zymk.cn, ios.fuliapps.com, vsco.co, api.vnision.com, *.my10api.com, sp.kaola.com, r.inews.qq.com, apple.fuliapps.com, newdrugs.dxy.cn, app101.avictown.cc, api.hlo.xyz, api.ijo.xyz, www.luqijianggushi.com, account.wps.*, u.kanghuayun.com, api.gyrosco.pe, api1.dobenge.cn, api.mvmtv.com, mitaoapp.yeduapp.com, origin-prod-phoenix.jibjab.com, www.3ivf.com, pay.guoing.com, api.termius.com, api.bjxkhc.com, viva.v21xy.com, biz.caiyunapp.com, api.gotokeep.com, ap*.intsig.net, mp.bybutter.com, api.vuevideo.net, api.picsart.c*, api.meiease.c*, splice.oracle.*.com, api.gamer.com.tw, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, *.lagoapps.com, *.xiangxiangapps.com, avatar-nct.nixcdn.com, spclient.wg.spotify.com, oa.zalo.me, origin-prod-phoenix.jibjab.com, api.meiease.c*, api.unfold.app, viva-asia1.vvbrd.com, graph.nhaccuatui.com, api.memrise.com , api.sync.me, pool.elsanow.io, lambda.us-east-1.amazonaws.com, api.mondlylanguages.com, api.busuu.com, owa.videoshowiosglobalserver.com:0, accounts.elevateapp.net, purchases.ws.pho.to, api-intl.mr.meitu.com, bmall.camera360.com, api.tv.zing.vn, api.calm.com, www.calm.com, api.global.mp3.zing.vn, apimboom2.globaldelight.net, photos.adobe.io, license.pdfexpert.com, subs.platforms.team, apic.musixmatch.com, api.getmimo.com, api.revenuecat.com, engbright.com, api.lingokids.com, www.peacefulsoundsapp.com, duolingo-leaderboards-prod.duolingo.com, mobile-api.adguard.com, api.blinkist.com, api-kinemaster-assetstore.*, api.pushover.net, ap*.intsig.net, api.overhq.com, receipt-validator.herewetest.com, lcs-mobile-cops.adobe.io, education.github.com, backend.getdrafts.com, ssl-api.itranslateapp.com, sk.ulysses.app, dayone.me, license.enpass.io, mp.bybutter.com, *.grammarly.com, splice.oracle.*.com, api.keepkeep.com, planner5d.com, secure.istreamer.com, www.api.monkeyuni.net, api.textnow.me, 


# Chavy box (多账号Cookie保存切换)
# 访问:  http://boxjs.com 管理
^https?://boxjs.com/api url script-request-body nzw9314/chavyleung/chavy.box.js
^https?://boxjs.com(/home|/sub|/my|/app|/log|/revert)?($|\/) url script-echo-response nzw9314/chavyleung/chavy.box.js

##NobyDa

# 去微博应用内广告 (By yichahucha)
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://github.com/yichahucha/surge/raw/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://github.com/yichahucha/surge/raw/master/wb_ad.js
# 去微信公众号广告 (By Choler)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body nzw9314/NobyDa/QuantumultX/File/Wechat.js

# 知乎去广告 (By onewayticket255)
https://api.zhihu.com/(ad|drama|fringe|commercial|market/popover|search/(top|preset|tab)|.*featured-comment-ad) url reject-200

https://api.zhihu.com/people/ url script-response-body nzw9314/onewayticket255/surge_zhihu_people.js

https://api.zhihu.com/moments/recommend url script-response-body nzw9314/onewayticket255/surge_zhihu_feed.js

https://api.zhihu.com/topstory/recommend url script-response-body nzw9314/onewayticket255/surge_zhihu_recommend.js

https://api.zhihu.com/v4/questions url script-response-body nzw9314/onewayticket255/surge_zhihu_answer.js

https?://link.zhihu.com/?target= url script-request-header nzw9314/onewayticket255/surge_zhihu_link.js

# 哔哩哔哩动画去广告 (By onewayticket255)
https://app.bilibili.com/x/v2/(splash|search/(defaultword|square)) url reject-200
https://api.bilibili.com/x/v2/dm/ad url reject-200
;https://app.bilibili.com/x/v2/space?access_key url script-response-body nzw9314/onewayticket255/surge_bilibili_space.js
https://app.bilibili.com/x/resource/show/tab?access_key url script-response-body nzw9314/onewayticket255/surge_bilibili_tab.js
https://app.bilibili.com/x/v2/feed/index?access_key url script-response-body nzw9314/onewayticket255/surge_bilibili_feed.js
https://app.bilibili.com/x/v2/account/mine?access_key url script-response-body nzw9314/onewayticket255/surge_bilibili_account.js
https://app.bilibili.com/x/v2/view?access_key url script-response-body nzw9314/onewayticket255/surge_bilibili_view_relate.js
https://api.bilibili.com/x/v2/reply/main?access_key url script-response-body nzw9314/onewayticket255/surge_bilibili_reply.js
https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom?access_key url script-response-body nzw9314/onewayticket255/surge_bilibili_live.js

# 哔哩哔哩番剧开启1080P+
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body nzw9314/NobyDa/QuantumultX/File/bilifj.js

# 抖音去广告去水印 (By Choler)
^https?:\/\/.+?\.amemv\.com\/aweme\/v\d\/(feed|aweme\/post|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-request-header nzw9314/NobyDa/Surge/JS/Aweme.js
^https?:\/\/.+?\.amemv\.com\/aweme\/v\d\/(feed|aweme\/post|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-response-body nzw9314/NobyDa/Surge/JS/Aweme.js

# 酷我音乐SVIP (By yxiaocai)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body nzw9314/NobyDa/Surge/JS/Kuwo.js
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1

# 小小影视 (By Eric)
# 会员
https:\/\/.*.xiao*(img|apps|appxs).com url request-header (\r\n)Cookie:.+(\r\n) request-header $1Cookie: xxx_api_auth=6131333537653261363463323331666265663763396239663835636662373930$2
# 去广告
https:\/\/.*\..*\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body nzw9314/Script/xxysad.js

# 爱美剧Vip (by huihui）(官网：app.meiju2018.com)
#ads
^http(s)://api.bjxkhc.com/index.php/app/ios/ads/index url reject-dict
^http(s)://api.bjxkhc.com/index.php/app/ios/ver/index_ios$ url reject
^http(s)://api.bjxkhc.com/index.php/app/ios/pay/ok$ url reject-dict
#VIP&ads
^http(s)://api.bjxkhc.com/index.php/app/ios/(vod/show|(user|vod|topic|type)/index) url script-response-body nzw9314/Script/aimeiju.js

# 网易蜗牛读书VIP (By yxiaocai and JO2EY)
^https?://p\.du\.163\.com/readtime/info.json url reject
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body nzw9314/NobyDa/QuantumultX/File/wnyd.js

# 看漫画极速版vip (By HoGer)
^https?:\/\/getuserinfo\.321mh\.com\/app_api\/v5\/getuserinfo\/ url script-response-body nzw9314/NobyDa/QuantumultX/File/kmh.js

# 知音漫客VIP (By mieqq)
^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ url script-response-body nzw9314/NobyDa/QuantumultX/File/Zymh.js

# 滴答清单 pro
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body nzw9314/NobyDa/QuantumultX/File/DiDaQingDan.js

# 网易漫画去开屏广告
^https://api-163.biliapi.net/cover url reject-img

# VSCO滤镜VIP
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body nzw9314/NobyDa/QuantumultX/File/vsco.js

# 大片-视频编辑器 VIP
^https?:\/\/api\.vnision\.com\/v1\/(users\/|banners) url script-response-body nzw9314/NobyDa/QuantumultX/File/dapian.js

# 91短视频
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body nzw9314/Script/91.js

# 腾讯新闻 去广告 (By Choler)
^https://r\.inews\.qq.com\/get(QQNewsUnreadList|RecommendList) url script-response-body nzw9314/Choler/Script/QQNews.js

# 香蕉视频
# VIP (By Gx3dong)
https:\/\/.*\.*apps.com url request-header Cookie:.+ request-header Cookie: xxx_api_auth=3433346533343130636136363935363132383864623761323737363464376233
# 去广告
^https?:\/\/.*\.*apps\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/) url script-response-body nzw9314/NobyDa/QuantumultX/File/xjsp.js

# 用药助手解锁专业版 (By Primovist)
^https?:\/\/(i|newdrugs)\.dxy\.cn\/(snsapi\/username\/|app\/user\/(pro\/stat\?|init\?timestamp=)) url script-response-body nzw9314/NobyDa/Surge/JS/yyzs.js

# 陆琪讲故事
^https:\/\/www\.luqijianggushi\.com\/api\/v2\/user\/get url script-response-body nzw9314/NobyDa/Surge/JS/luqi.js

# WPS (By eHpo)
^https://account.wps.*/api/users/ url script-response-body nzw9314/NobyDa/Surge/JS/Wps.js

# Gyroscope 解锁 pro (By Maasea)
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body nzw9314/NobyDa/Surge/JS/gyroscope.js

# 水印精灵 vip (By Alex0510)
^https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo url script-response-body nzw9314/NobyDa/Surge/JS/syjl.js

# 大千视界
^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|a=addr.*vid=.*) url script-response-body nzw9314/NobyDa/Surge/JS/dqsj.js

# JibJab解锁pro
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user url script-response-body nzw9314/NobyDa/Surge/JS/jibjab.js

# Termius 解锁本地pro  (By Maasea)
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body nzw9314/NobyDa/Surge/JS/Termius.js

# 小影 解锁Vip (By @hiepkimcdtk55)
^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body nzw9314/NobyDa/Surge/JS/vivavideo.js

# 彩云天气 Vip
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body nzw9314/NobyDa/QuantumultX/File/ColorWeather.js

# Keep 解锁私人课程和动作库 (QX存在bug 该脚本可能无法生效)
^https:\/\/api\.gotokeep\.com\/(.+\/subject|.+\/dynamic) url script-response-body nzw9314/NobyDa/Surge/JS/Keep.js

# 扫描全能王 pro
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body nzw9314/NobyDa/Surge/JS/CamScanner.js

# VUE pro
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body nzw9314/NobyDa/Surge/JS/VUE.js

# NiChi 解锁素材
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body nzw9314/NobyDa/Surge/JS/NiChi.js

# PicsArt美易 pro
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body nzw9314/NobyDa/Surge/JS/PicsArt.js

# Splice 视频编辑器 pro
^https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body nzw9314/NobyDa/Surge/JS/Splice.js

#百度云倍速播放
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body nzw9314/NobyDa/Surge/JS/BaiduCloud.js

#皮皮虾 去广告去水印
^https?://.*\.snssdk\.com/bds/(feed/stream|comment/cell_reply|cell/cell_comment|cell/detail|ward/list|user/favorite|user/cell_coment|user/cell_userfeed|user/publish_list) url script-response-body nzw9314/NobyDa/Surge/JS/Super.js


#越南老哥langkhach270389

# vsco
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body nzw9314/langkhach/vsco.js

# gyroscope
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body nzw9314/langkhach/Gyroscope.vip.js

# Termius 
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body nzw9314/langkhach/Terminus.js

# PicsArt
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body nzw9314/langkhach/picsArt.vip.js

#Vivavideo
^https:\/\/viva-asia1\.vvbrd\.com\/api\/rest\/u\/vip* url script-response-body nzw9314/langkhach/vivavideo.vip.js

#Undfold
^https:\/\/api\.unfold\.app\/v1\/ios\/receipts$ url script-response-body nzw9314/langkhach/Unfold.vip.js

#Nhaccuatui
^https:\/\/graph\.nhaccuatui\.com\/.*\/users\/info* url script-response-body nzw9314/langkhach/nhaccuatui.js

#Memrise
^https:\/\/api\.memrise\.com\/.+\/(me\/$|dashboard\/$|leaderboards\/following\/) url script-response-body nzw9314/langkhach/memrise.vip.js

# Jibjab
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$ url script-response-body nzw9314/langkhach/jibjab.vip.js

#buyhack
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body nzw9314/langkhach/verify_receipt.js

#sync
^https:\/\/api\.sync\.me\/api\/purchases\/(report_purchases|get_purchases)  url script-response-body nzw9314/langkhach/syn.me.js

#elsaresponse
^https:\/\/pool\.elsanow\.io\/user\/api\/v1\/purchase$ url script-response-body nzw9314/langkhach/elsa-response.js

#elsarewrite
^https:\/\/pool\.elsanow\.io\/content\/api\/v1\/modules\/download$  url request-header (\r\n)x-session-token:.+(\r\n) request-header $1x-session-token: F3S0w0bysBQFdbjtxpFurrFv2ItBBcBkVQxUddQW+9vjt2JXM751ksqq5GAWpkl+kk9nhig9BGh9JhYHQaokmendY6zLZDscHiRkZD2HrdJclKVCLordAARJhYIrf5C+5OSK6ax2TA45CKi8S09FEtYXN4noXO7gt42NT6WPIv6DKhdIwVxQuIAMLU5abmpMTDlyWeI4ulBWcOQbuZWWZg==

#drops
^https:\/\/lambda\.us-east-1\.amazonaws\.com/.*/functions\/prod-4-syncPurchases\/invocations$ url script-response-body nzw9314/langkhach/drops.js

#mondly
^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body nzw9314/langkhach/mondly.vip.js

#busuu
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body nzw9314/langkhach/busuu.vip.js

#Videoshow
^https:\/\/owa\.videoshowiosglobalserver\.com\/.*\/iosPayClient url script-response-body nzw9314/langkhach/videoshow.vip.js

#elevate
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body nzw9314/langkhach/elevate.vip.js

#beautyplus
^https:\/\/api-intl\.mr\.meitu\.com/.*/subs_offer_elg$ url script-response-body nzw9314/langkhach/beautyplusvip.js

#camera360
^https:\/\/bmall\.camera360\.com\/api\/(iap\/check-receipt$|mix\/getinfo$) url script-response-body nzw9314/langkhach/camera360.vip.js

#zingtv
^https?:\/\/api\.tv\.zing\.vn\/.*/user* url script-response-body nzw9314/langkhach/zingtvvipv1.js

#calm
^https:\/\/api\.calm\.com\/me$ url script-response-body nzw9314/langkhach/calm.vip.js

#remove_manage
^https:\/\/www\.calm\.com\/mobile\/manage-subscription\?token=*  url reject-img

#lightroom
^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body nzw9314/langkhach/Lightroom.js

#Pdfexpert
^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) url script-response-body nzw9314/langkhach/Pdfexpert.vip.js

#productive&sleepzy&&weather live
^https:\/\/subs\.platforms\.team\/.+\/apple\/verify$ url script-response-body nzw9314/langkhach/productive.js

#Musixmatch
^https:\/\/apic\.musixmatch\.com\/ws\/.*\/config\.get url script-response-body nzw9314/langkhach/musixmatch.miao.js

#boom
^https:\/\/apimboom2\.globaldelight\.net\/itunesreceipt_v2\.php$ url 302 https://raw.githubusercontent.com/langkhach270389/Scripting/master/boom.vip.rsp

#mimo
^https:\/\/api\.getmimo\.com\/v1\/subscriptions$ url script-response-body nzw9314/langkhach/mimo.vip.js

#mojo&noto
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[a-zA-Z0-9_-]*$) url script-response-body nzw9314/langkhach/revenuecat.js

#Bright
^https:\/\/engbright\.com\/app-portal\/apple\/receipt$ url 302 https://raw.githubusercontent.com/langkhach270389/Scripting/master/Bright.rsp

#lingokids
^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ url script-response-body nzw9314/langkhach/lingokids.vip.js

#musicalm
^https:\/\/www\.peacefulsoundsapp\.com\/api\/v1\/init$ url script-response-body nzw9314/langkhach/musicalm.js

#duolingo
^https:\/\/duolingo-leaderboards-prod\.duolingo\.com\/leaderboards* url script-response-body nzw9314/langkhach/duolingo.js

#ulike
^https:\/\/commerce-i18n-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info$ url script-response-body nzw9314/langkhach/ulike.js

#adguardpremium
^https:\/\/mobile-api\.adguard\.com\/api\/1\.0\/ios_validate_receipt$ url 302 https://raw.githubusercontent.com/langkhach270389/Scripting/master/Adguard.rsp

#zingmp3
^https:\/\/api\.global\.mp3\.zing\.vn\/1\.0\/getUserInfo\?data=* url script-response-body nzw9314/langkhach/zingmp3.js

#Blinkist
^https:\/\/api\.blinkist\.com\/v4\/(me$|me.json$|me\/access$) url script-response-body nzw9314/langkhach/blinkist.js

#sololearn 
^https:\/\/api\.sololearn\.com\/(authenticateDevice|challenge\/GetContestFeed|Profile\/GetProfile)$ url script-response-body nzw9314/langkhach/sololearn.js

#kinemaster
^https:\/\/api-kinemaster-assetstore\.(nexstreaming|kinemasters)\.com\/.*\/product\/verifyReceipt$ url script-response-body nzw9314/langkhach/kinemaster.js

#pushover
^https:\/\/api\.pushover\.net\/1\/messages\.json* url script-response-body nzw9314/langkhach/pushover.js

#CamScanner
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body nzw9314/langkhach/CamScaner.js

#over
^https:\/\/api\.overhq\.com\/(user\/token\/refresh$|subscription\/verifyReceipt$) url script-response-body nzw9314/langkhach/over.vip.js

#speak&translate
^https:\/\/receipt-validator\.herewetest\.com\/apple\/verifyTransaction$ url script-response-body nzw9314/langkhach/speak&translate.js

#document
^https:\/\/license\.pdfexpert\.com\/api\/.*\/documents\/subscription\/(refresh$|check$) url script-response-body nzw9314/langkhach/documents.js

#workingcopy
^https:\/\/education\.github\.com\/api\/user$ url script-response-body nzw9314/langkhach/workingcopy.js

#draft
^https:\/\/backend\.getdrafts\.com\/api\/.*\/verification* url script-response-body nzw9314/langkhach/draft.js

#phothop&PSexpress
^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body nzw9314/langkhach/photoshop.js

#itranslate&lingo&voice&converse
^https:\/\/ssl-api\.itranslateapp\.com\/.*\/subscriptions\/.*\/ios$ url script-response-body nzw9314/langkhach/itranslate.js

#ulysses
^https:\/\/sk\.ulysses\.app\/api\/v1\/user_offers$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 

^https:\/\/sk\.ulysses\.app\/api\/v1\/itunes_receipt_verify$ url script-response-body nzw9314/langkhach/ulysses.js

#pre_dayone
;^https:\/\/dayone\.me\/api\/users$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 

#dayone
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body nzw9314/langkhach/dayone.js

#endel
^https:\/\/api-production\.endel\.io\/.*\/user$ url script-response-body nzw9314/langkhach/endel.js

#nichi
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body nzw9314/langkhach/nichi.js

#grammarly
^https:\/\/subscription\.grammarly\.com\/api\/v1$ url script-response-body nzw9314/langkhach/grammarly.js

#splice
^https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body nzw9314/langkhach/splice.js

#planner5d
^https:\/\/planner5d\.com\/api\/sets url script-response-body nzw9314/langkhach/planner5d.js

#playerxtreme
;^https:\/\/secure\.istreamer\.com\/backend$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 
^https:\/\/secure\.istreamer\.com\/backend$ url script-response-body nzw9314/langkhach/playerxtreme.js

#all apps monkey
^https:\/\/www\.api\.monkeyuni\.net\/api\/.+\/mobile\/account\/load-update url script-response-body nzw9314/langkhach/monkey.js

#textnow
^https:\/\/api\.textnow\.me\/api2.0\/users\/.* url script-response-body nzw9314/langkhach/Textnow.js

##大雄脚本组

# 驾校一点通 (by @superuv)
^https:\/\/vipapi\.jxedt\.com\/vip\/check url script-response-body nzw9314/Script/jxydt.js

# 彩云小译   (by @superuv)
^https:\/\/api\.interpreter\.caiyunai\.com\/v1\/user url script-response-body nzw9314/Script/cyxy.js

#Bear熊掌记  内购解锁
#需要ios13 复制放本地 恢复购买后禁用掉
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body nzw9314/Script/bear.js

#Pocket list (by @superuv)
^https:\/\/pocketlists\.com\/api\/v1\/pocketlists.me.get url script-response-body nzw9314/Script/pock.js

#海豚记账 (by @superuv)
https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body nzw9314/Script/HTJZ.js

#幕布 (by @superuv)
https:\/\/mubu\.com\/api\/app\/user\/info url script-response-body nzw9314/Script/mb.js

#智能证件照相机 (by @superuv)
^https:\/\/app\.xunjiepdf\.com\/api\/v4\/virtualactregister url script-response-body nzw9314/Script/znzj.js

#猫咪翻译(by @superuv)
http:\/\/miaow\.yiyongcad\.com\/api\/v4\/memprofile url script-response-body nzw9314/Script/mmfy.js

#微商助手(by @superuv)
https:\/\/api\.lennou\.com\/user\/info url script-response-body nzw9314/Script/wszs.js

#gk扫描仪(by @superuv)
^https:\/\/api\.gkocr\.com\/api\/userlogin1.php url script-response-body nzw9314/Script/smy.js

#流利说.阅读 (by@火羽&@singee)
^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) url script-response-body nzw9314/Script/llyd.js

#人人视频 (by@george Jiang & R)
^https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll|\/rrtv-video\/v4plus\/season\/detail) url script-response-body nzw9314/Script/rrtv.js

#abaenglish (未测试)
^https:\/\/api\.revenuecat\.com\/v1\/(receipts|\d{1,})$ url script-response-body nzw9314/Script/abaenglish.vip.js

#轻颜相机 & ulike & 蒸汽波相机(vaporcam)三合一 解锁VIP(By @s y & Alex0510)
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body nzw9314/Script/qyxj.js

#CPU Dasher破解(By @syzzzf)
#需要ios13 复制放本地 恢复购买后禁用掉
^https:\/\/p.+-buy\.itunes\.apple\.com\/WebObjects\/MZFinance.woa\/wa\/inAppRegrantPurchaseHistory url script-response-body nzw9314/Script/cupdasher.js

#酷我换肤(By @syzzzf)
#已经有的皮肤需要先从本地皮肤删除再换
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)  url script-response-body   nzw9314/Script/themekuwo.js

# 115离线 (请仔细阅读脚本内使用说明 By ikanam)
^https:\/\/editorapi\.115\.com.* url 302 http://115.com/lx?taskdg=1
^http:\/\/115\.com\/lx.*$ url script-response-body nzw9314/Script/115lx.js

#lake
^https:\/\/api\.lakecoloring\.com\/v1\/receipt url script-response-body nzw9314/Script/lake.js

#人人影视字幕组(商店版)去广告,保留轮播推荐影片(By @Kaya)
http://ctrl.playcvn.com/app/(init|ads) url script-response-body nzw9314/Script/YYeTs.js

#每日英语阅读/每日外刊 解锁课程  (By chamberlen)
^https:\/\/dict\.eudic\.net\/jingting\/GetThisChapterTaskStatus? url script-response-body nzw9314/Script/mryy.js

#联通营业厅 去轮播广告 (By Wangsc1)
^https?://m.client.10010.com/uniAdmsInterface/getHomePageAd url script-response-body nzw9314/Script/china_unicom.js

# YouTube去广告
# 自行添加主机名
^https?:\/\/.+\.googlevideo\.com\/.+&oad url reject-img
^https?:\/\/.+\.googlevideo\.com\/.+ctier url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+ad_ url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+log_ url reject-img
^https?:\/\/.+\.youtube\.com\/get_midroll_ url reject-img
^https?:\/\/premiumyva\.appspot\.com\/vmclickstoadvertisersite url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/ads url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/.+adformat url reject-img
^https?:\/\/.+\.youtube\.com\/pagead\/ url reject-img
^https?:\/\/.+\.youtube\.com\/ptracking url reject-img

#哔咔漫画 屏蔽更新(By @FlintyLemming)
#iOS 2.1.2.1 屏蔽 2.1.2.2 的更新提示
^https:\/\/api\.wakamoment\.ga\/init\?platform\=ios url script-response-body nzw9314/Script/blockBikaUpdate.js

#崩坏3 跨服 (By @FlintyLemming)
^http:\/\/(\d*\.\d*\.\d*\.\d*)\/query_gameserver\?version=3\.7\.0_gf_ios&t=(\d*)&uid=(\d*) url 302 http://$1/query_gameserver?version=3.7.0_gf_android&t=$2&uid=$3
^https:\/\/global1\.bh3\.com\/query_dispatch\?version=3\.7\.0_gf_ios&t=(\d*) url 302  https://global1.bh3.com/query_dispatch?version=3.7.0_gf_android&t=$1 

#第一弹 去广告+原画 (By Miao Miao)
^https:\/\/api\.diyidan\.net\/v0\.3\/(user\/personal_homepage|vip_user\/info|tv_series\/index\?appChanne) url script-response-body nzw9314/Script/Diyidan.js

#Fantastical 内购解锁  (By @sunshy)
^https:\/\/api\.flexibits\.com\/v1\/(auth|account)\/(device|details|appstore-receipt)\/$ url script-response-body nzw9314/Script/fantastical.js

#菜谱大全解锁vip (By @photonmang)
https?:\/\/api\.jiaonizuocai\.com url script-response-body nzw9314/Script/cpdq.js

#SoloLearn Unlock PRO & Platinum Moderator (By @sunshy)
https:\/\/api\.sololearn\.com\/(authenticateDevice|challenge\/GetContestFeed|Profile\/GetProfile)$ url script-response-body nzw9314/Script/sololearn.js

#头脑吃鸡
^https://tncj.hortorgames.com/chicken/fight/(answer|findQuiz) url script-response-body nzw9314/chavyleung/tncj/tncj.min.js

#Pear 雪梨
^https:\/\/(www\.baidu.com2\.club|ayk\.tmdidi\.com|m\.pearkin\.com|souhu\.mett\.me|bkcd\.b-cdn\.net)\/(api\/movie\/WatchMovie|api\/Account\/CheckVip|api\/account\/IndexDetail) url script-response-body nzw9314/Script/pear.js

#克拉壁纸  解锁付费壁纸 (By @Dachaw)
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body nzw9314/Script/clarity.js

#洪恩双语绘本unlock (By 军哥哥)
https:\/\/bookapi\.ihuman\.com\/(v1\/get\_user\_info|v1\/get\_purchase\_list) url script-response-body nzw9314/Script/hnsyhb.js

#中国体育直播unlock (By 军哥哥)
http:\/\/rest\.zhibo\.tv\/room\/get\-room\-info\-v430 url script-response-body nzw9314/Script/zgtyzb.js

# 有道云笔记VIP (ByAlex0510)
https://note.youdao.com/yws/(mapi/payment|api/self) url script-response-body nzw9314/Script/ydybj.js

#Peak 解锁Pro
^https:\/\/billing\.peakcloud\.org\/billing\/2\/user\/me? url script-response-body nzw9314/Script/peak.js

# IT之家 去新闻列表广告
^https?:\/\/api\.ithome\.com\/json\/slide\/index url script-response-body nzw9314/Script/ITHome.js
^https?:\/\/api\.ithome\.com\/json\/(newslist|listpage)\/news url script-response-body nzw9314/Script/ITHome.js

# XMind思维导图 (by @JigsaWo)
https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body nzw9314/Script/XMind.js

# 万里影视 （by LTribe） 
^http?:\/\/.*\.arten.cn/login/login url script-response-body nzw9314/Script/Wanliyingshi.js

# 奇热小说 解锁收费章节(By @ios4521)
^https://api.weiqire.com/api3/(visitor/|user/unlockCharpter) url script-response-body nzw9314/Script/qrxs.js

# 石墨文档 (By Alex0510)
https://api.shimo.im/users/ url script-response-body nzw9314/Script/shimo.js

#VideoStar Unlock（by LTribe）
^https?:\/\/.*\.videostarapp\.com\/scripts\/subsNew\.php url script-response-body nzw9314/Script/VideoStar.js

# Pillow (By @CheeryTodo)
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body nzw9314/Script/pillow.js

# 马卡龙 (By @CheeryTodo)
https://app.api.versa-ai.com/pay/order/iap/check url script-response-body nzw9314/Script/mkl.js

# 韩剧TV (By 凉意)
# 下载地址请看脚本内说明
^https\:\/\/hjapi\.bjxkhc\.com\/v2d2\/users\/.*\/member url script-response-body nzw9314/Script/hanjuTV.js

# 手机硬件管家 (ByAlex0510)
http:\/\/api\.591master\.com\:8081\/(1.0|3.6.8)\/ui(forum|common)\/(downloadwallpaper|getuser) url script-response-body nzw9314/Script/sjyjgj.js

#筋斗云tv (By 凉意)
^http\:\/\/jdytv\.cn\/login\/login\/veifys url script-response-body nzw9314/Script/jdyTV.js

# 花椒视频 (ByAlex0510)
http://user.shywck.com/user/userinfo url script-response-body nzw9314/Script/hjsp.js

# 迅捷应用6合1 （by LTribe）
^https?:\/\/.*\.xunjie.*\.com\/api\/v\d\/* url script-response-body nzw9314/Script/xunjie.js

# 小睡眠（by 黑黑酱）
^https:\/\/api\.psy-1\.com\/cosleep\/user\/info url script-response-body nzw9314/Script/xiaoshuimian.js

# 蜗牛睡眠会员（by黑黑酱）
^https:\/\/snailsleep\.net\/snail\/v1\/profile\/get url script-response-body nzw9314/Script/wnsm.js

# 可可英语会员
^https:\/\/mob2015\.kekenet\.com\/keke\/mobile\/index\.php url script-response-body nzw9314/Script/kkyy.js

# 飒漫画 (By @u18888)
^https:\/\/m\.samh\.xndm\.tech\/userapi\/info\/v1\/getuserinfo url script-response-body nzw9314/Script/Smh.js

# 闪电下载vip (By 凉意)
^http\:\/\/app\.flashdown365\.com\/ios\/login url script-response-body nzw9314/Script/sdxz.js

# 西窗烛 （By 黑黑酱）
^https:\/\/avoscloud\.com\/1\.1\/users\/ url script-response-body nzw9314/Script/xcz.js

#JAV101无限观看 (By 凉意)
^https\:\/\/pwaapi\.gao1gps\.cn\/v1\/user\/info url script-response-body nzw9314/Script/JAV101.js

#美颜相机一次性解锁内购（by黑黑酱）
^https:\/\/api\.meiyan\.com\/iap\/verify\.json url script-response-body nzw9314/Script/myxj.js

# Fit健身会员 （by黑黑酱）
^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo url script-response-body nzw9314/Script/fit.js

# 油猴转换器 (by Peng-YM)
https:\/\/greasyfork\.org\/scripts\/.*\.user\.js url script-response-body nzw9314/Peng-YM/Rewrites/GreasyFork/greasy-fork.js

##以下为仅QX1.05+(TF188+)可用

# 动画疯 去广告(by NobyDa)
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-request-header nzw9314/NobyDa/Surge/JS/Bahamut.js
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-response-body nzw9314/NobyDa/Surge/JS/Bahamut.js

#京东历史比价 (by yichahucha)
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body nzw9314/yichahucha/jd_price.js

#淘宝历史比价 (by yichahucha)
^http://.+/amdc/mobileDispatch url script-request-body nzw9314/yichahucha/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body nzw9314/yichahucha/tb_price.js

#Netflix获取评分(by yichahucha)
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header nzw9314/yichahucha/nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body nzw9314/yichahucha/nf_rating.js
# 单集评分
^https?://ios\.prod\.ftl\.netflix\.com/iosui/warmer/.+type=show-ath url script-response-body nzw9314/yichahucha/nf_rating_season.js
