
document.addEventListener('DOMContentLoaded', () => {
    const lang = document.documentElement.lang;
  
    const translations = {
        "en": [
            {
                avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
                nickname: "FF Beta Guides",
                playerType: "casual gamer",
                time: "2025.03.12",
                href: "../blog/0",
                blog: "Get the latest FF Beta 2025 and FF Beta Seruapk! We offer official Android/iOS testing guides, FF Beta Testing Apkphat, and FF Beta Mod Joy downloads. Join Free Fire Beta 2025 and experience new features today!"
            },
            {
                avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
                nickname: "FF Beta Testing APKPhat",
                playerType: "casual gamer",
                time: "2025.03.16",
                href: "../blog/1",
                blog: "The Jungle's Secret: Unraveling FF Beta Testing APKPhat Mysteries and Beyond, In the heart of the Free Fire universe, whispers of FF Beta Testing APKPhat echo through the digital jungles, promising untold adventures and exclusive access."
            },
        ],
        "zh": [
            {
                avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
                nickname: "FF Beta Guides",
                playerType: "casual gamer",
                time: "2025.03.12",
                href: "../blog/0",
                blog: "Get the latest FF Beta 2025 and FF Beta Seruapk! We offer official Android/iOS testing guides, FF Beta Testing Apkphat, and FF Beta Mod Joy downloads. Join Free Fire Beta 2025 and experience new features today!"
            },
            {
                avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
                nickname: "FF Beta Testing APKPhat",
                playerType: "casual gamer",
                time: "2025.03.16",
                href: "../blog/1",
                blog: "The Jungle's Secret: Unraveling FF Beta Testing APKPhat Mysteries and Beyond, In the heart of the Free Fire universe, whispers of FF Beta Testing APKPhat echo through the digital jungles, promising untold adventures and exclusive access."
            },
        ], 
        "ko": [
            {
                avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
                nickname: "FF Beta Guides",
                playerType: "casual gamer",
                time: "2025.03.12",
                href: "../blog/0",
                blog: "Get the latest FF Beta 2025 and FF Beta Seruapk! We offer official Android/iOS testing guides, FF Beta Testing Apkphat, and FF Beta Mod Joy downloads. Join Free Fire Beta 2025 and experience new features today!"
            },
            {
                avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
                nickname: "FF Beta Testing APKPhat",
                playerType: "casual gamer",
                time: "2025.03.16",
                href: "../blog/1",
                blog: "The Jungle's Secret: Unraveling FF Beta Testing APKPhat Mysteries and Beyond, In the heart of the Free Fire universe, whispers of FF Beta Testing APKPhat echo through the digital jungles, promising untold adventures and exclusive access."
            },
        ]
    }

    const blogData = translations[lang]

    const blogContainer = document.getElementById('blog-grid'); // 使用 ID 获取元素

    blogData.forEach(item => {
      const blogItem = document.createElement('div');
      var real_blog_content = item.blog
      if (real_blog_content.length > 60) {
        real_blog_content = real_blog_content.substring(0, 100) + "..."
      }

      blogItem.className = "rounded-lg border bg-[#1f202f] shadow-sm h-full bg-card border-none";
      blogItem.innerHTML = `
          <div class="p-4  h-full flex flex-col justify-between
               cursor-pointer bg-[#1f202f] rounded-xl shadow-md hover:bg-gradient-to-br
                hover:from-[#3a3a4a] hover:to-[#1e1e2f] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out
          ">
              <div class="">
                <h3 class="font-semibold tracking-tight text-base md:text-lg">${item.nickname}</h3>
                <div class="">
                  <p class="mt-2 text-muted text-sm md:text-base">${real_blog_content}</p>
                </div>
             </div>
              <div class="flex justify-between">
                <p class="mt-4 text-left text-muted text-sm md:text-base">${item.time}</p>
                <p class="mt-4 text-right text-muted text-sm md:text-base"> Read More </p>
              </div>
          </div>
      `;

      // 添加点击事件
      blogItem.addEventListener('click', () => {
        window.location.href = item.href; // 跳转到 href 指定的链接
        });

      blogContainer.appendChild(blogItem);
    });
  });


/* <p class="text-muted-foreground text-xs md:text-sm">${item.playerType}</p> */


//   <section class="mx-auto mt-6">
//   <h2 class="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12">Play blogs</h2> 
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
