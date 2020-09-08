/*
JingDong daily bonus, Multiple in one scripts
Description :
When using for the first time. Need to manually log in to the https://bean.m.jd.com checkin to get cookie. If notification gets cookie success, you can use the check in script.
Due to the validity of cookie, if the script pops up a notification of cookie invalidation in the future, you need to repeat the above steps.
Daily bonus script will be performed every day at 0:05 a.m. You can modify the execution time.
If reprinted, please indicate the source. My TG channel @NobyDa
Update 2020.2.13 21:00 v66 
Effective number: 22
~~~~~~~~~~~~~~~~
Surge 4.0 :
[Script]
cron "5 0 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
# Get JingDong cookie.
http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean(Index|GroupStageIndex) max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
~~~~~~~~~~~~~~~~
QX 1.0.5 :
[task_local]
5 0 * * * JD_DailyBonus.js
[rewrite_local]
# Get JingDong cookie. QX 1.0.5(188+):
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean(Index|GroupStageIndex) url script-request-header JD_DailyBonus.js
~~~~~~~~~~~~~~~~
QX or Surge MITM = api.m.jd.com
~~~~~~~~~~~~~~~~
*/
var log = true; //是否开启日志, false则关闭
var stop = 0; //自定义延迟签到,单位毫秒,(如填200则每个接口延迟0.2秒执行),默认无延迟
var $nobyda = nobyda();
var KEY = $nobyda.read("CookieJD");
if ($nobyda.isRequest) {
  GetCookie()
  $nobyda.end()
} else {
  all()
  $nobyda.end()
}
async function all() {//签到模块相互独立,您可注释某一行以禁用某个接口.
  //await JingDongBean(stop); //京东京豆
  //await JingRongBean(stop); //金融京豆
  //await JingRongSteel(stop); //金融钢镚
  //await JingDongTurn(stop); //京东转盘
  //await JRDoubleSign(stop); //金融双签
