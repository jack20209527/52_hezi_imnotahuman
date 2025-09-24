
// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  const lang = document.documentElement.lang;
  
  const translations = {
      "en": [
        {
          "title": "What is I'm Not a Human?",
          "content": "I'm Not a Human is a psychological horror game where you must survive by correctly identifying and eliminating 'Visitors' who pretend to be human. Set in a tense, isolated world, the game challenges your observational and decision-making skills. The core loop involves scrutinizing every visitor—from their physical tells to their behavioral quirks—to determine their true nature. Our I'm Not a Human guide helps you master the game's difficult choices.",
        },
        {
          "title": "How to Play I'm Not a Human?",
          "content": "The gameplay in I'm Not a Human revolves around using your limited energy to perform inspections on visitors. Each inspection, whether it’s checking teeth, listening to their story, or simply observing them, costs a portion of your energy. You need to gather enough information to make a high-stakes decision: let them in, turn them away, or take them out. We offer a full I'm Not a Human how to play guide with tips and strategies to help you make the right call every time.",
        },
        {
          "title": "How to Find All Endings and Visitors?",
          "content": "One of the biggest challenges is uncovering all the secrets of I'm Not a Human. The game has multiple endings, and the visitors you encounter can change based on your choices. To get all endings and meet all visitors, you'll need to pay close attention to the clues and make different decisions in each playthrough. For players aiming for 100% completion, our I'm Not a Human all visitors and endings guide is the perfect resource.",
        },
        {
          "title": "Is There an I'm Not a Human Wiki?",
          "content": "Yes, our website serves as a comprehensive I'm Not a Human wiki. We have meticulously documented the game's lore, visitor types, and various outcomes. Whether you're trying to understand the cryptic news broadcasts or looking for a detailed breakdown of the characters, our wiki provides all the information you need. Our team has compiled unique insights and verified data to provide the most accurate I'm Not a Human information available.",
        },
        {
          "title": "Where Can I Download I'm Not a Human?",
          "content": "The official and safest way to play I'm Not a Human is to download it from the Steam store. We strongly recommend against downloading from third-party sites or torrents, which can expose your computer to malware and other security risks. The official Steam page is the best place to get the game, receive all future updates, and interact with the community.",
        },
        {
          "title": "How Can I Get the 'Aura' Ending?",
          "content": "The 'aura' ending is one of the most sought-after endings in I'm Not a Human. It requires specific choices and actions throughout the game. We've dedicated a detailed guide to help you achieve this unique outcome. The guide covers all the necessary steps, from managing your energy to making the right decisions with key visitors. If you're looking for the best tips to get the I'm Not a Human aura ending, our guide has you covered.",
        }
],
      "zh": [
        {
          title: "How to Join FF Beta Testing?",
          content: "Get Early Access: How to Join FF Beta Testing?Want to experience the latest Free Fire content first? Joining FF Beta Testing is your best choice! Usually, you need to follow test recruitment information on the official website or social media platforms. Keep an eye on keywords like 'free fire ff beta testing' and 'ff beta testing 2025' for the latest test updates. Once you meet the requirements, you'll get the 'download ff beta testing apk' download link, and you can start your Beta Testing journey! Remember, test slots are limited, first come, first served!",
        },
        {
          title: "Is FF Beta Testing APK Safe?",
          content: "Safe Downloads: Is FF Beta Testing APK Reliable? The 'ff beta testing apk' download links we provide are from official channels or have been strictly reviewed to ensure your device's security. Please look for official logos like 'download ff beta testing' and 'download ff' to avoid downloading APKs from unknown sources. We also recommend enabling your device's security features before downloading to protect your gaming experience! We also offer safe downloads of other versions like 'ff beta seruapk' and 'seru apk', so you can enjoy them with confidence.",
        },
        {
          title: "What Unique Features Does FF Beta Testing APK Offer?",
          content: "Exclusive Reveal: What Are the Highlights of FF Beta Testing APK?FF Beta Testing APK brings together Free Fire's latest research and development results, allowing you to experience exciting content like new characters, new weapons, and new maps in advance. For example, versions like 'ff beta testing apkphat' and 'beta testing apkphat' may include exclusive features that have not yet been released. Additionally, you can experience various modified versions through 'apk ff beta testing mod' and enjoy a different gaming experience! By participating in the test, you will also have the opportunity to receive exclusive rewards and become a pioneer Free Fire player!",
        },
        {
          title: "How to Solve FF Beta Testing APK Installation Issues?",
          content: "Installation Guide: Solve FF Beta Testing APK Installation Problems!When installing 'ff beta testing apk', you may encounter some problems. Please ensure that your device has enabled the permission to 'allow installation of apps from unknown sources'. If the installation fails, please check if the APK file is complete or try downloading it again. You can also refer to the installation tutorials of versions like 'ff beta testing seru apk' and 'ff beta seru apk'. If the problem persists, please contact our customer service team, and we will be happy to assist you!"
        },
        {
          title: "How to Provide Feedback During FF Beta Testing?",
          content: "Your Suggestions: Help Improve FF Beta Testing!During your participation in 'free fire ff beta testing', we encourage you to actively provide feedback on any problems or suggestions you encounter. You can submit your comments through the in-game feedback channels or official forums. Your feedback will directly affect the subsequent development of Free Fire and make the game more perfect. We also pay special attention to feedback on modified versions such as 'ffbetatesting modfyp', and your participation will provide us with valuable reference!"
        },
        {
          title: "Will Game Data Be Retained After FF Beta Testing Ends?",
          content: "Data Questions: What Happens to Data After FF Beta Testing?Usually, FF Beta Testing data will not be retained in the official version. But your valuable feedback and gaming experience will provide us with important references. Please feel free to experience test versions like 'ff beta' and 'ff mod' and enjoy the fun of the game! At the same time, we also recommend that you re-experience the game after the official version is launched to experience more complete game content!"
        }
      ],
      "ko": [
        {
          title: "How to Join FF Beta Testing?",
          content: "Get Early Access: How to Join FF Beta Testing?Want to experience the latest Free Fire content first? Joining FF Beta Testing is your best choice! Usually, you need to follow test recruitment information on the official website or social media platforms. Keep an eye on keywords like 'free fire ff beta testing' and 'ff beta testing 2025' for the latest test updates. Once you meet the requirements, you'll get the 'download ff beta testing apk' download link, and you can start your Beta Testing journey! Remember, test slots are limited, first come, first served!",
        },
        {
          title: "Is FF Beta Testing APK Safe?",
          content: "Safe Downloads: Is FF Beta Testing APK Reliable? The 'ff beta testing apk' download links we provide are from official channels or have been strictly reviewed to ensure your device's security. Please look for official logos like 'download ff beta testing' and 'download ff' to avoid downloading APKs from unknown sources. We also recommend enabling your device's security features before downloading to protect your gaming experience! We also offer safe downloads of other versions like 'ff beta seruapk' and 'seru apk', so you can enjoy them with confidence.",
        },
        {
          title: "What Unique Features Does FF Beta Testing APK Offer?",
          content: "Exclusive Reveal: What Are the Highlights of FF Beta Testing APK?FF Beta Testing APK brings together Free Fire's latest research and development results, allowing you to experience exciting content like new characters, new weapons, and new maps in advance. For example, versions like 'ff beta testing apkphat' and 'beta testing apkphat' may include exclusive features that have not yet been released. Additionally, you can experience various modified versions through 'apk ff beta testing mod' and enjoy a different gaming experience! By participating in the test, you will also have the opportunity to receive exclusive rewards and become a pioneer Free Fire player!",
        },
        {
          title: "How to Solve FF Beta Testing APK Installation Issues?",
          content: "Installation Guide: Solve FF Beta Testing APK Installation Problems!When installing 'ff beta testing apk', you may encounter some problems. Please ensure that your device has enabled the permission to 'allow installation of apps from unknown sources'. If the installation fails, please check if the APK file is complete or try downloading it again. You can also refer to the installation tutorials of versions like 'ff beta testing seru apk' and 'ff beta seru apk'. If the problem persists, please contact our customer service team, and we will be happy to assist you!"
        },
        {
          title: "How to Provide Feedback During FF Beta Testing?",
          content: "Your Suggestions: Help Improve FF Beta Testing!During your participation in 'free fire ff beta testing', we encourage you to actively provide feedback on any problems or suggestions you encounter. You can submit your comments through the in-game feedback channels or official forums. Your feedback will directly affect the subsequent development of Free Fire and make the game more perfect. We also pay special attention to feedback on modified versions such as 'ffbetatesting modfyp', and your participation will provide us with valuable reference!"
        },
        {
          title: "Will Game Data Be Retained After FF Beta Testing Ends?",
          content: "Data Questions: What Happens to Data After FF Beta Testing?Usually, FF Beta Testing data will not be retained in the official version. But your valuable feedback and gaming experience will provide us with important references. Please feel free to experience test versions like 'ff beta' and 'ff mod' and enjoy the fun of the game! At the same time, we also recommend that you re-experience the game after the official version is launched to experience more complete game content!"
        }
      ]
  }
    
      accordionData = translations[lang]
      const accordionContainer = document.getElementById('accordion-container');
    
      accordionData.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.innerHTML = `
            <div class="arrow_down_button_parent_home">
                <button class="arrow_down_button_home">
                    ${item.title}
                    <span class="arrow_down_arrow_home"></span>
                </button>
                <div class="arrow_down_panel_home">
                    <p class="arrow_down_panel_text_home">${item.content}</p>
                </div>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
      });
    

    var acc = document.getElementsByClassName("arrow_down_button_home");
        var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            var arrow = this.querySelector(".arrow_down_arrow_home"); // 获取箭头元素
            arrow.classList.toggle("active"); // 切换箭头元素的 active 类
        
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }

}); 

/**
 测试代码如下:
    <div class="px-10">
        <button class="arrow_down_button_home">Section 1 <span class="arrow_down_arrow_home"></span></button>
        <div class="arrow_down_panel_home">
          <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        <button class="arrow_down_button_home">Section 2<span class="arrow_down_arrow_home"></span></button>
        <div class="arrow_down_panel_home">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        <button class="arrow_down_button_home">Section 3<span class="arrow_down_arrow_home"></span></button>
        <div class="arrow_down_panel_home">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
 */