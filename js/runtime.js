var now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    var start = new Date("08/01/2022 00:00:00"); // 旅行者1号开始计算的时间
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
    var unit = (dis / 149600000).toFixed(6);  // 天文单位
    var grt = new Date("03/23/2023 00:00:00");	// 相恋时间 月/日/年 时:分:秒
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9
            ? `<img class='boardsign' src='https://img.shields.io/badge/DQY&WY%E3%81%AE%E5%B0%8F%E7%AA%9D-%E7%A3%95%E7%9D%A1%E7%9D%80%E5%91%A2-ff69b4?logo=westerndigital&style=plastic' title='没事儿就多陪陪女朋友~'><br><div style="font-size:14px;font-weight:bold"><img src="https://z1.ax1x.com/2023/10/14/pipIZd0.png"> <a href="http://beian.miit.gov.cn/" style="color:#CA4124" target="_blank">蜀ICP备2023027543号</a></div><div style="font-size:14px;font-weight:bold">我们已经相恋 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
            : `<img class='boardsign' src='https://img.shields.io/badge/DQY&WY%E3%81%AE%E5%B0%8F%E7%AA%9D-%E7%A3%95%E7%9D%A1%E7%9D%80%E5%91%A2-ff69b4?logo=westerndigital&style=plastic' title='没事儿就多陪陪女朋友~'><br><div style="font-size:14px;font-weight:bold"><img src="https://z1.ax1x.com/2023/10/14/pipIZd0.png"> <a href="http://beian.miit.gov.cn/" style="color:#CA4124" target="_blank">蜀ICP备2023027543号</a></div><div style="font-size:14px;font-weight:bold">我们已经相恋 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
        document.getElementById("workboard") &&
        (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);