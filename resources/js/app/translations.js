var dict = {
   "LANGUAGE":{
      "en":"English (EN)",
      "cn":"中文版本 (CN)"
   },
   "HOME":{
      "en":"Home",
      "cn":"主页"
   },
   "CROWDSALE":{
      "en":"Crowdsale",
      "cn":"众筹"
   },
   "CROWDSALE_LINK":{
      "en":"/sale/index.html",
      "cn":"/sale/cn.html"
   },
   "HOW_WORKS":{
      "en":"How it works",
      "cn":"如何使用？"
   },
   "WHITE_PAPER":{
      "en":"White Paper",
      "cn":"白皮书"
   },
   "SLACK":{
      "en":"Slack",
      "cn":"Slack聊天"
   },
   "FORUM":{
      "en":"Community",
      "cn":"论坛"
   },
   "LOGIN":{
      "en":"Login",
      "cn":"登录"
   },
   "SIGNUP":{
      "en":"Sign up",
      "cn":"注册"
   },
   "VIEW_PROPOSAL":{
      "en":"View Proposal",
      "cn":"我们的草案"
   },
   "PLAY_WIN":{
      "en":"Play eSports, <orange>Win rewards</orange>",
      "cn":"打电竞,  <orange>赢赏金</orange>"
   },
   "READ_MORE":{
      "en":"Read More",
      "cn":"读更"
   },
   "WHAT_FIRSTBLOOD":{
      "en":"What is FirstBlood?",
      "cn":"什么是第一滴血?"
   },
   "SIGNUP_DESC":{
      "en":"Reserve a place in the upcoming alpha program by signing up now!",
      "cn":"现在留下你的邮箱来获得我们内测的邀请函!"
   },
   "RESERVE":{
      "en":"Reserve!",
      "cn":"邀请我!"
   },
   "HOW_WORKS_DETAILS":{
      "en":"A service that\'s <high-light>automated</high-light> and <high-light>trustworthy!</high-light>",
      "cn":"我们提供的平台是 <high-light>全自动的</high-light> 并且 <high-light>值得信赖!</high-light>"
   },
   "STEP_1":{
      "en":"Player <high-light>selects</high-light> the game they want to play and the <high-light>stakes</high-light> they want to play with.",
      "cn":"玩家自己 <high-light>选择</high-light> 他想电竞的游戏，并且选择他想电竞的 <high-light>金额</high-light>。"
   },
   "STEP_2":{
      "en":"Player may <high-light>invite or wait</high-light> for someone to join the game, or use a <high-light>matchmaker</high-light> to find an opponent.",
      "cn":"玩家然后可以 <high-light>邀请或者等待</high-light> 其他玩家的加入, 或者使用我们的 <high-light>自动排位</high-light> 来寻找合适的对手"
   },
   "STEP_3":{
      "en":"Game finishes, <high-light>Oracle</high-light> fetches result (first blood, turret, winner, etc.), smart contract processes <high-light>reward.</hight-light>",
      "cn":"最后当比赛结束后, <high-light>Oracle（先知）</high-light> 将会获取比赛数据 (第一滴血, 第一座塔, 赢家, 等等.), 最后智能合约会自动处理 <high-light>赏金.</hight-light>"
   },
   "WE_BUILD":{
      "en":"We are building FirstBlood",
      "cn":"我们为您带来 Firstblood"
   },
   "PLATFORM_DESC":{
      "en":"A platform that lets eSports players challenge each other in the field and win rewards.<br /> Made possible by smart contracts and oracles in the blockchain.",
      "cn":"第一个能够让草根电竞玩家 随时随地参与竞赛并且获得赏金的平台.<br />我们是第一个使用区块链里面的智能合约和先知来进行电竞比赛的服务的公司."
   },
   "GAME_DATA":{
      "en":"Game data will be <high-light>automatically</high-light> verified,<br />Reward will be <high-light>automatically</high-light> sent.",
      "cn":"所有比赛的数据将会被 <high-light>自动化地</high-light> 采集和验证,<br />赏金将会被 <high-light>自动化地</high-light>处理."
   },
   "INFORMATION_DECK":{
      "en":"Information Deck",
      "cn":"我们的介绍"
   },
   "RESOURCES":{
      "en":"Resources",
      "cn":"其他资源"
   },
   "ROADMAP":{
      "en":"Roadmap",
      "cn":"我们的规划"
   },
   "ALPHA_INV":{
      "en":"Alpha Invite",
      "cn":"Alpha测试邀请"
   },
   "FAQ":{
      "en":"FAQ",
      "cn":"常问问题"
   },
   "BLOG":{
      "en":"Blog",
      "cn":"我们的博客"
   },
   "TERMS":{
      "en":"Terms of Service",
      "cn":"使用&服务条款"
   },
   "PRIVACY":{
      "en":"Privacy Policy",
      "cn":"隐私条款"
   }
}

var translator = $('body').translate({lang: "en", t: dict}); //use English
var changeLanguage = function(language) {
  translator.lang(language);
}
