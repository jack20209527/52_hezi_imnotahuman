
document.addEventListener('DOMContentLoaded', () => {
  const lang = document.documentElement.lang;
  
  const translations = {
      "en": [
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
              "nickname": "SilentObserver",
              "playerType": "puzzle solver",
              "time": "2025.09.20",
              "index": 0,
              "comment": "This game is a masterpiece of psychological horror. Every visitor is a new puzzle, and the tension of trying to spot the fakes is what makes it so gripping. I've already replayed it three times just to see the different endings. The aura system is brilliant and adds a whole new layer of strategy. A must-play for fans of unique thrillers."
              
          },
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Game_MasterZack.jpg",
              "nickname": "EndingsExpert",
              "playerType": "completionist",
              "time": "2025.09.21",
              "index": 1,
              "comment": "I'm obsessed with unlocking all the endings! The choices are so nuanced, and the consequences of a single mistake are brutal. This game challenges you to think critically, not just react. My favorite part is comparing notes with the community on what each choice leads to. The no i'm not a human wiki is essential for figuring out the lore."
          },
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Pixel_WizardDan.jpg",
              "nickname": "VisitorHunter",
              "playerType": "detective",
              "time": "2025.09.21",
              "index": 2,
              "comment": "This game is a true test of wits. I've been creating my own checklist for all visitors in i'm not a human. The coat guy and the tall man are particularly creepy. It’s not about jump scares; it's about the deep-seated paranoia that comes with every knock on the door. The game's atmosphere is what makes it so incredibly effective."
          },
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/StrategyBoss_Alex.jpg",
              "nickname": "SuspenseFan",
              "playerType": "horror enthusiast",
              "time": "2025.09.22",
              "index": 3,
              "comment": "Just finished my first playthrough and wow, what a ride. The moral dilemmas you face are so heavy. I accidentally let a fake in, and the consequences were terrifying. This isn't just a game; it's an experience. The focus on dialogue and observation makes it stand out. Can't wait to try for a different ending!"
          },
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/RPG_FanaticWill.jpg",
              "nickname": "LogicMaster",
              "playerType": "strategy gamer",
              "time": "2025.09.22",
              "index": 4,
              "comment": "As a strategy gamer, I love the energy management and information gathering in this. It’s like a puzzle with life-or-death stakes. The hints from the TV news are crucial for finding the correct path. It's a game that rewards careful planning and logical deduction. The no i'm not a human endings guide has been a fantastic resource."
          },
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/IndieGame_FanJoe.jpg",
              "nickname": "HiddenGemHunter",
              "playerType": "indie enthusiast",
              "time": "2025.09.23",
              "index": 5,
              "comment": "So glad I found this game! The concept is simple, yet the depth is incredible. The uncertainty you feel every time someone knocks on the door is what makes it so good. The sound design and atmosphere are top-notch. It's a fantastic example of a small indie game doing something truly unique. Definitely a hidden gem."
          },
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Arcade_LoverEmma.jpg",
              "nickname": "MoralDilemmaBen",
              "playerType": "story gamer",
              "time": "2025.09.23",
              "index": 6,
              "comment": "The moral choices in this game are heavy. Sometimes you have to make a tough call with limited information, and it really makes you think. The different visitor types, like the mushroom guy, kept me on my toes. It’s more than just a horror game; it’s a character study on survival and human nature."
          },
          {
              "avatar": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/KawaiiPlayer_Mia.jpg",
              "nickname": "TheConnoisseur",
              "playerType": "critical reviewer",
              "time": "2025.09.24",
              "index": 7,
              "comment": "I'm Not a Human nails the feeling of paranoia. It’s a beautifully crafted experience with a minimalist design that puts all the focus on the gameplay and story. The various no i'm not a human endings provide a lot of replay value, and the community is buzzing with theories about the lore. An absolute must-play for anyone who appreciates smart horror."
          }
],
      "zh": [
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
              nickname: "TechGuruJake",
              playerType: "casual gamer",
              time: "2024.06.06",
              index: 0,
              comment: "I absolutely love FF Beta Testing! Every time, I get to experience new content ahead of everyone else, feeling like a VIP. The new map in the last ff beta testing apk was just awesome! I highly recommend everyone try download ff beta testing, it's totally worth it! Plus, each test brings small surprises, like hidden easter eggs or new weapon skins. It's like being part of a treasure hunt, full of unknowns and excitement."
              
          },
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Game_MasterZack.jpg",
              nickname: "PixelNinjaSara",
              playerType: "hardcore gamer",
              time: "2024.06.06",
              index: 1,
              comment: "Playing ff mod felt like opening the door to a new world! Unlimited resources are so cool, no more worrying about equipment. But I still love the official free fire ff beta testing the most, being able to participate in game improvements with everyone is awesome! Plus, I get to meet many new friends in each test, discussing the game and sharing experiences, it feels like a big family. I think this community atmosphere is one of Free Fire's biggest charms."
          },
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Pixel_WizardDan.jpg",
              nickname: "RetroFanMike",
              playerType: "retro enthusiast",
              time: "2024.06.06",
              index: 2,
              comment: "apk ff is so convenient, you can find all versions of Free Fire. I downloaded ff beta seruapk before and had a blast. I hope there will be more testing opportunities like ff beta testing 2025 in the future! Plus, I feel like I learn many new skills and strategies in each test, which is very helpful for improving my gameplay. I hope Free Fire can keep this innovative and progressive spirit, bringing more surprises to players."
          },
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/StrategyBoss_Alex.jpg",
              nickname: "KawaiiGamerLia",
              playerType: "casual gamer",
              time: "2024.06.06",
              index: 3,
              comment: "As a girl, I also love Free Fire! Especially playing ff beta testing seru apk with friends is very interesting. And I think the resources on seru apk are also very rich, you can always find a version you like. I think Free Fire is not just a game, but also a social platform. I've met many friends here, we team up, fight together, and share happiness. It feels like going back to student days, playing with friends."
          },
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/RPG_FanaticWill.jpg",
              nickname: "StrategyKingTom",
              playerType: "strategy gamer",
              time: "2024.06.06",
              index: 4,
              comment: "I've always been a loyal Free Fire player, I've participated in almost all the tests on ff beta testing apkphat. I feel this game keeps improving and surprises me every time. I hope the official team continues to maintain this and release more fun content! Plus, I think Free Fire's balance is well done, both newbies and veterans can find their fun. I hope Free Fire can keep this balance, making more players fall in love with this game."
          },
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/IndieGame_FanJoe.jpg",
              nickname: "SpeedRunQueen",
              playerType: "speedrunner",
              time: "2024.06.06",
              index: 5,
              comment: "I downloaded the beta version on beta testing apkphat before, it felt pretty good, but my phone configuration is low, it's a bit laggy. I hope the official team can optimize it. But the game itself is really fun, I've already recommended it to my friends! Plus, I think Free Fire's controls are very simple, even newbies can quickly get started. I hope Free Fire can keep this simple and easy-to-learn feature, allowing more players to easily experience the fun of the game."
          },
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Arcade_LoverEmma.jpg",
              nickname: "MMOAddictBen",
              playerType: "MMO player",
              time: "2024.06.06",
              index: 6,
              comment: "After playing Free Fire for so many years, I still think download ff is the most classic. Although there are various new games emerging now, I still love Free Fire's feel and gameplay the most. I hope to keep playing it! Plus, I think Free Fire's social system is well done, you can team up with friends and voice chat, it feels like being there. I hope Free Fire can keep this social aspect, allowing players to feel the joy of friendship and teamwork in the game."
          },
          {
              avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/KawaiiPlayer_Mia.jpg",
              nickname: "BattleFanAlex",
              playerType: "competitive gamer",
              time: "2024.06.06",
              index: 7,
              comment: "I downloaded the modded version on apk ff beta testing mod before, it was indeed very fun, but it felt less challenging. The official ff beta is more interesting, being able to compete with other players is awesome! Plus, I think Free Fire's competitiveness is very strong, every match makes me excited. I hope Free Fire can keep this competitiveness, allowing players to feel the challenge and sense of achievement in the game."
          }
      ],
    'ko': [
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
            nickname: "TechGuruJake",
            playerType: "casual gamer",
            time: "2024.06.06",
            index: 0,
            comment: "I absolutely love FF Beta Testing! Every time, I get to experience new content ahead of everyone else, feeling like a VIP. The new map in the last ff beta testing apk was just awesome! I highly recommend everyone try download ff beta testing, it's totally worth it! Plus, each test brings small surprises, like hidden easter eggs or new weapon skins. It's like being part of a treasure hunt, full of unknowns and excitement."
            
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Game_MasterZack.jpg",
            nickname: "PixelNinjaSara",
            playerType: "hardcore gamer",
            time: "2024.06.06",
            index: 1,
            comment: "Playing ff mod felt like opening the door to a new world! Unlimited resources are so cool, no more worrying about equipment. But I still love the official free fire ff beta testing the most, being able to participate in game improvements with everyone is awesome! Plus, I get to meet many new friends in each test, discussing the game and sharing experiences, it feels like a big family. I think this community atmosphere is one of Free Fire's biggest charms."
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Pixel_WizardDan.jpg",
            nickname: "RetroFanMike",
            playerType: "retro enthusiast",
            time: "2024.06.06",
            index: 2,
            comment: "apk ff is so convenient, you can find all versions of Free Fire. I downloaded ff beta seruapk before and had a blast. I hope there will be more testing opportunities like ff beta testing 2025 in the future! Plus, I feel like I learn many new skills and strategies in each test, which is very helpful for improving my gameplay. I hope Free Fire can keep this innovative and progressive spirit, bringing more surprises to players."
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/StrategyBoss_Alex.jpg",
            nickname: "KawaiiGamerLia",
            playerType: "casual gamer",
            time: "2024.06.06",
            index: 3,
            comment: "As a girl, I also love Free Fire! Especially playing ff beta testing seru apk with friends is very interesting. And I think the resources on seru apk are also very rich, you can always find a version you like. I think Free Fire is not just a game, but also a social platform. I've met many friends here, we team up, fight together, and share happiness. It feels like going back to student days, playing with friends."
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/RPG_FanaticWill.jpg",
            nickname: "StrategyKingTom",
            playerType: "strategy gamer",
            time: "2024.06.06",
            index: 4,
            comment: "I've always been a loyal Free Fire player, I've participated in almost all the tests on ff beta testing apkphat. I feel this game keeps improving and surprises me every time. I hope the official team continues to maintain this and release more fun content! Plus, I think Free Fire's balance is well done, both newbies and veterans can find their fun. I hope Free Fire can keep this balance, making more players fall in love with this game."
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/IndieGame_FanJoe.jpg",
            nickname: "SpeedRunQueen",
            playerType: "speedrunner",
            time: "2024.06.06",
            index: 5,
            comment: "I downloaded the beta version on beta testing apkphat before, it felt pretty good, but my phone configuration is low, it's a bit laggy. I hope the official team can optimize it. But the game itself is really fun, I've already recommended it to my friends! Plus, I think Free Fire's controls are very simple, even newbies can quickly get started. I hope Free Fire can keep this simple and easy-to-learn feature, allowing more players to easily experience the fun of the game."
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Arcade_LoverEmma.jpg",
            nickname: "MMOAddictBen",
            playerType: "MMO player",
            time: "2024.06.06",
            index: 6,
            comment: "After playing Free Fire for so many years, I still think download ff is the most classic. Although there are various new games emerging now, I still love Free Fire's feel and gameplay the most. I hope to keep playing it! Plus, I think Free Fire's social system is well done, you can team up with friends and voice chat, it feels like being there. I hope Free Fire can keep this social aspect, allowing players to feel the joy of friendship and teamwork in the game."
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/KawaiiPlayer_Mia.jpg",
            nickname: "BattleFanAlex",
            playerType: "competitive gamer",
            time: "2024.06.06",
            index: 7,
            comment: "I downloaded the modded version on apk ff beta testing mod before, it was indeed very fun, but it felt less challenging. The official ff beta is more interesting, being able to compete with other players is awesome! Plus, I think Free Fire's competitiveness is very strong, every match makes me excited. I hope Free Fire can keep this competitiveness, allowing players to feel the challenge and sense of achievement in the game."
        }
    ]
  }
   

    commentData = translations[lang]

    const commentContainer = document.getElementById('comment-grid'); // 使用 ID 获取元素
    const titleElement = document.getElementById('comment-title');

    // 设置标题
    titleElement.textContent = "Further Details and Information"; // 可以根据需要修改

    commentData.forEach(item => {
      const commentItem = document.createElement('div');
      commentItem.className = "rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none";
      commentItem.innerHTML = `
        <div class="flex flex-col space-y-1.5 md:p-4 p-2">
          <div class="flex items-center gap-2 md:gap-4">
            <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10">
              <img class="aspect-square h-full w-full" alt="${item.nickname}" src="${item.avatar}" />
            </span>
            <div>
              <h3 class="font-semibold tracking-tight text-base md:text-lg">${item.nickname}</h3>
              <p class="text-muted-foreground text-xs md:text-sm">${item.playerType}</p>
            </div>
          </div>
        </div>
        <div class="md:p-4 p-2">
          <p class="text-muted text-sm md:text-base">${item.comment}</p>
        </div>
      `;
      commentContainer.appendChild(commentItem);
    });
  });





//   <section class="mx-auto mt-6">
//   <h2 class="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12">Play Comments</h2> 
//   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4"> 
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10">
//           <img class="aspect-square h-full w-full" alt="GamerXtreme" src="https://api.randomx.ai/avatar/GamerXtreme.png" />
//       </span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">GamerXtreme GamerXtremeGamerXtreme</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">OMG! Just . &#55357;&#56846;
//      </p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10">
//           <img class="aspect-square h-full w-full" alt="RPGFanatic22" src="https://api.randomx.ai/avatar/RPGFanatic22.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">RPGFanatic22</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">. &#55357;&#56490;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="RobloxLover101" src="https://api.randomx.ai/avatar/RobloxLover101.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">RobloxLover101</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base"> . &#55358;&#56617;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="AnimeGamerGal" src="https://api.randomx.ai/avatar/AnimeGamerGal.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">AnimeGamerGal</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">gameplay. &#55357;&#56860;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="SorcererPlayer99" src="https://api.randomx.ai/avatar/SorcererPlayer99.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">SorcererPlayer99</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">more. &#55358;&#56691;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="LevelUpPro" src="https://api.randomx.ai/avatar/LevelUpPro.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">LevelUpPro</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">. &#55357;&#56397;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="MMORPGMaster" src="https://api.randomx.ai/avatar/MMORPGMaster.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">MMORPGMaster</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">vs! &#55357;&#56399;</p>
//     </div>
//    </div>
//    <div class="rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none">
//     <div class="flex flex-col space-y-1.5 md:p-4 p-2">
//      <div class="flex items-center gap-2 md:gap-4">
//       <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 md:w-10 md:h-10"><img class="aspect-square h-full w-full" alt="BattleRoyaleGuy" src="https://api.randomx.ai/avatar/BattleRoyaleGuy.png" /></span>
//       <div>
//        <h3 class="font-semibold tracking-tight text-base md:text-lg">BattleRoyaleGuy</h3>
//        <p class="text-muted-foreground text-xs md:text-sm">player</p>
//       </div>
//      </div>
//     </div>
//     <div class="md:p-4 p-2">
//      <p class="text-muted text-sm md:text-base">for XP is actually enjoyable. &#55358;&#56601;</p>
//     </div>
//    </div>
//   </div>
//  </section> 
