// SCMA 风险账号数据文件
// 添加新账号：复制 data 数组内的 { ... } 结构，填入对应字段，注意项之间用逗号分隔
// 整库版本时间：修改上方的 date / time 即可（网站头部「🕐 数据更新时间：」显示用）
// 字段说明（每条账号单独字段，写在 data 数组内每个 { ... } 里）：
//   name        - 账号名称（字符串）
//   time        - 本条账号的最后更新时间（字符串，格式 年-月-日-时:分，例 2026-8-15-10:30）
//                 用于排序（更新时间）以及详情弹窗「🕐 最后更新：」显示
//   riskContent - 风险行为描述（字符串）
//   riskLevel   - 风险等级：1=神人 2=注意 3=中危 4=危险 5=高危（数字）
//                 用于排序（严重程度：由重到轻 = riskLevel 降序；由轻到重 = 升序）
// accomplices - 同伙列表（数组，每项结构：{ name, platform, account, desc }）
//                 desc 为可选字段，详情弹窗中会显示该同伙的描述说明（支持多行文本）
//   altAccounts - 疑似同一人的账号列表（数组，每项结构同上：{ name, platform, account, desc }）
//                 desc 同样可选，有就会在详情里显示
//   references  - 相关信息链接（数组，每项是URL字符串；没有就留空数组 []）
// platform 可选值（同伙、关联账号两个栏目共用同一套）：微信、QQ、telegram、B站、抖音、快手、小红书、邮箱

var SCMA_DATA = {
  "date": "2026-8-27",
  "time": "22:50",
  "data": [
    {
      "name": "XZWPlayer",
      "time": "2026-8-15-15:20",
      "riskContent": "多次过度宣称自己的为系统是“世界第一”，招人厌烦。\n根据群内资料，在F_code举办SCTWOS 26B时，因为展示到他的作品时，截图刚好在他不想展示的那一秒，便恶意挑事，宣称F_code“故意去掉其他部分不展示”“在群里对他进行人身攻击”“明明发了文件给他却不在作品文件里截图”等，实际上除了最后一项，其他都为假，所有一项F_code在活动声明里写的很清楚，是用指定时间段内的最新投稿的B站视频进行评选，但是XZW似乎没看。",
      "riskLevel": 1,
      "accomplices": [

      ],
      "altAccounts": [
        {"name": "ATRI", "platform": "QQ", "account": "1245185437"},
        {"name": "XzwPlayer013", "platform": "B站", "account": "3546566931515921"},
        {"name": "XzwPlayer", "platform": "B站", "account": "3546619869923869"}
      ],
      "references": [
        "https://www.bilibili.com/video/BV1S9N36YEQK",
        "https://www.bilibili.com/video/BV1HQKD6wEsz",
        "https://www.bilibili.com/video/BV1HND9BjEtt"
      ]
    },
    {
      "name": "sp鹦鹉",
      "time":"2026-8-16-09:57",
      "riskContent": "经常盗用他人的伪系统作品，并且会把基本的GUI加上手写的“sp鹦鹉”和不雅图画。并且别人找她时，她还一直说这是她自创的。\n她还说“那个不叫python，那个叫sp语言”等猎奇话语。\n目前已经退出sc圈。",
      "riskLevel": 2,
      "accomplices": [
        {"name":"Mpigeon","platform": "QQ", "account": "1771889878"}
      ],
      "altAccounts": [
        {"name": "特异原始阳光帝果", "platform": "B站", "account": "3493112626285140"}
      ],
      "references": [
      
      ]
    },
    {
      "name": "LX_gssy",
      "time":"2026-8-26-20:13",
      "riskContent": "在未经允许的情况下解包了zx34的作品文件，并且在未经允许的情况下在B站进行传播。\nzx34本人提醒后，还进行恶意嘲讽。\n至2026年8月28日，仍未删除传播作品的视频。",
      "riskLevel": 3,
      "accomplices": [
        {"name":"周志航offline","platform": "B站", "account": "3546720224938218", "desc": "他在评论区与LX_gssy站一边。并且制作了下载解包工具的网站zhouzhihang.top/zzhos/zx"}
      ],
      "altAccounts": [
        {"name": "LX_gssy", "platform": "B站", "account": "1948173011"}
      ],
      "references": [
        "https://www.bilibili.com/video/BV1X6hw6kEL4/"
      ]
    },
    {
      "name": "周志航offline",
      "time":"2026-8-26-20:20",
      "riskContent": "帮凶。\n在违规者LX_gssy的评论区发布了解包的工具的下载网站。\n并且在未经允许的情况下制作了非常简陋，但是GUI完全照搬zx34的作品zxLeafOS。",
      "riskLevel": 2,
      "accomplices": [
        
      ],
      "altAccounts": [
        {"name": "周志航offline", "platform": "B站", "account": "3546720224938218"}
      ],
      "references": [
        "https://www.bilibili.com/video/BV1X6hw6kEL4/",
        "https://zhouzhihang.top/zzhos/zx"
      ]
    }
  ]
};
