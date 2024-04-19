// Information dictionary
const information = {
  "how_we_use_your_information": {
    "title": "How We Use Your Information",
    "points": [
      {
        "label": "To Provide Our Services",
        "details": [
          "process or fulfill orders and transactions;",
          "maintain and service accounts;",
          "support and improve our loyalty programs, such as Starbucks® Rewards;",
          "deliver gift cards or e-gifts, and any associated personalized messages, in accordance with your instructions;",
          "debug to identify and repair errors that impair existing functionality;",
          "facilitate the functionality of our websites and mobile applications;",
          "process payments;",
          "customize experiences and personalization when you are in and around our stores, if you have given permission for location sharing."
        ]
      },
      // Other points follow the same pattern
    ]
  },
  "how_we_disclose_your_information": {
    "title": "How We Disclose Your Information",
    "points": [
      {
        "label": "When We Work Together",
        "details": [
          "We may share information between and among Starbucks Corporation, its subsidiaries, and affiliated companies for purposes of management and analysis, decision making, and other business purposes. For example, we may share your information with our subsidiaries and affiliated companies to administer our loyalty programs, process orders and requests, and expand and promote our product and service offerings."
        ]
      },
      // Other points follow the same pattern
    ]
  }
};

const firstDic = {
  "At Starbucks, we approach data and privacy as we approach everything we do: we put people first.": ["As part of our effort to protect your privacy and to comply with applicable privacy and data protection laws, we strive to consider all of our data governance practices through the lens of the recognized principles of data minimization, limited collection, and limited use, among other key areas addressed below. We do so to respect and maintain your trust. In other words, we believe that taking care of you includes taking care of your data and privacy. Grab a cup of coffee and learn more below.",
    "Please see the Consumer Health Data Privacy Notice for Washington and Nevada for additional information of how we may process personal information that could be considered consumer health data."],
  "Starbucks Privacy Notice": "Last Revised: March 29, 2024"
}
const overView = {
  "Overview": [
    "This Starbucks Privacy Notice describes the types of personal information that Starbucks Corporation and its respective subsidiaries and affiliated companies (“Starbucks,” “we,” and “us”) collect, how we use it, how and when it may be shared, and the rights and choices you have with respect to your information. It also explains how we communicate with you and how you can make requests or submit inquiries to us about your information. Our goal is to help you understand how we use your information to improve our products, services, marketing, and interactions with you, as part of our commitment to maintaining your trust. Thank you for taking the time to read and understand our data and privacy related practices.",
    "By continuing to use Starbucks Services you acknowledge this Privacy Notice and agree to our Terms of Use and other important policies, all available on our Online Policies page."
  ]
}

const contentDic = {
  "Contents": {
    "Applicability and Scope": "This Privacy Notice (“Notice”) applies to the websites located at starbucks.com, starbucksreserve.com, princi.com, starbucks.ca, the Starbucks mobile applications available at https://www.starbucks.com/coffeehouse/mobile-apps (“Starbucks App”), when you visit our stores, and through any other websites or applications owned and operated by Starbucks brands or products that direct the viewer or user to this Notice (“Starbucks Services”). Our websites and mobile applications may offer links to websites and/or other mobile applications that are operated by third parties and not by Starbucks. If you visit one of these linked websites, you should read the website’s privacy notice, terms and conditions, and their other policies. We are not responsible for the policies and practices of third parties. Any information you give to those organizations is governed under their privacy notice, terms and conditions, and other policies.",
    "Updates to this Privacy Notice": "We may update this Notice from time to time. We will notify you of material changes to this Notice and will update the Last Revised date on this Notice. We encourage you to look for updates and changes to this Notice when you access our websites and mobile applications.",
    "Information We Collect": "",
    "Sources of Information": "",
    "How We Use Your Information": "",
    "How We Disclose Your Information": "",
    "Cookies, Web Beacons, and Similar Technologies": "",
    "How We Protect Your Information": "",
    "Retention": "",
    "Children’s Privacy": "",
    "Starbucks WiFi": "",
    "Your Choices & Rights": "",
    "Notice of Financial Incentive & Starbucks® Rewards": "",
    "Additional Disclosures for Data Subjects in the EEA, the U.K. and Switzerland": "",
    "Participation in the Privacy Framework": "",
    "Contact Us": ""
  }
};

// Get the container where you want to append the elements
const container = document.getElementById('content_privacy');

// Loop through the "Overview" array and create paragraphs
const title = document.createElement('strong');

// Create a paragraph element
title.textContent = "Overview";
title.classList.add("text-base", "underline");
container.appendChild(title);
overView.Overview.forEach(text => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text; // Set the text content of the paragraph// Add multiple classes to the paragraph
  container.appendChild(paragraph);
});

const title1 = document.createElement('strong');
const des = document.createElement('p');
title1.textContent = "Contents";
title1.classList.add("text-base", "underline");
container.appendChild(title1);
des.textContent = "You may skip to the specific sections of our Privacy Notice by selecting any of the sections listed below.";
container.appendChild(des)


// Accessing all keys within the "Contents" object
const ol = document.createElement('ol');
ol.classList.add("list-decimal", "mx-8", "flex", "flex-col", "gap-2", "m-4");
// Append the ordered list to the container
container.appendChild(ol);

// Accessing all keys within the "Contents" object
const keys = Object.keys(contentDic.Contents);
let i = 1;
// Loop through each key and create list items
keys.forEach(key => {
  // Create a list item for each key
  const li = document.createElement('li');
  const a = '<a href="#content' + i + '"class="underline text-green-700">';

  li.innerHTML = a + key + "</a>"
  // Append the list item to the ordered list
  ol.appendChild(li);
  i++
});

let numberOfContent = 1;
function createStrongParagraphElements(data, containerId) {
  const container = document.getElementById(containerId);

  // Ensure the container exists
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  // Loop through the keys and values of the data object
  Object.entries(data).forEach(([key, value]) => {
    const strong = document.createElement('strong');
    text = numberOfContent+". "+key // Create a strong element
    strong.textContent = text; // Set the text content of the strong element
    numberOfContent++
    const paragraph = document.createElement('p'); // Create a paragraph element
    paragraph.textContent = value; // Set the text content of the paragraph
    
    container.appendChild(strong); // Append the strong element to the container
    container.appendChild(paragraph); // Append the paragraph to the container
  });
}

// Function to create HTML elements for content
function createContentElements(content, containerId) {
  const container = document.getElementById(containerId);

  // Ensure the container exists
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  // Loop through each key-value pair in the content object
  for (const [heading, paragraphs] of Object.entries(content)) {
    // Create a heading element for each key
    const headingElement = document.createElement('strong');
    text = numberOfContent+". "+heading // Create a strong element
    headingElement.textContent = text;
    container.appendChild(headingElement);
    numberOfContent++

    // Loop through each paragraph in the value array
    paragraphs.forEach(paragraphObj => {
      for (const [paragraphHeading, sentences] of Object.entries(paragraphObj)) {
        // Create a paragraph element for the heading
        const paragraphHeadingElement = document.createElement('h3');
        paragraphHeadingElement.textContent = paragraphHeading;
        container.appendChild(paragraphHeadingElement);

        // Create a list element for the sentences
        const listElement = document.createElement('ol');

        // Loop through each sentence in the value array
        
        if (sentences!=0){
          sentences.forEach(sentence => {
            // Find the index of the dash
            listElement.classList.add('list-disc',"m-6");
            const dashIndex = sentence.indexOf(' – ');
            // Create a list item for each sentence
            const listItem = document.createElement('li');
            // Create a span element for the bold part
            const boldSpan = document.createElement('span');
            // Set the bold part including the dash
            boldSpan.textContent = sentence.substring(0, dashIndex + 2);
            boldSpan.style.fontWeight = 'bold'; // Make it bold
            listItem.appendChild(boldSpan); // Append the bold span
            // Append the rest of the text after the bold part
            listItem.appendChild(document.createTextNode(sentence.substring(dashIndex + 2)));
            
  
            listElement.appendChild(listItem);
          });
        }

        // Append the list element to the container
        container.appendChild(listElement);
      }
    });
  }
}

// Function to create HTML elements for the information

function createInformationElements(information, containerId) {
  const container = document.getElementById(containerId);

  // Ensure the container exists
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  // Loop through each key-value pair in the information object
  for (const [key, value] of Object.entries(information)) {
    // Create a list item element

    const listItem = document.createElement('li');

    // Split the key into bold and normal parts
    const [boldPart, normalPart] = key.split(' - ');

    // Create a strong element for the bold part
    const keyStrong = document.createElement('strong');
    keyStrong.textContent = boldPart;

    // Create a text node for the normal part
    const normalText = document.createTextNode(normalPart);

    // Append the key strong element to the list item
    listItem.appendChild(keyStrong);
    listItem.appendChild(document.createTextNode(' - '));
    // Append the normal text node to the list item
    listItem.appendChild(normalText);

    // Create a ul element for the nested list
    const nestedUl = document.createElement('ol');
    nestedUl.classList.add('list-disc',"m-4")

    // Loop through each item in the value array and create list item elements for them
    value.forEach(item => {
      const nestedListItem = document.createElement('li');
      nestedListItem.textContent = item;
      nestedUl.appendChild(nestedListItem);
    });

    // Append the nested ul element to the list item
    listItem.appendChild(nestedUl);

    // Append the list item to the container
    container.appendChild(listItem);
  }
}
// Call the function with the information object and container ID


// Example usage:
const contentDetail1 = {
  "Applicability and Scope": "This Privacy Notice (“Notice”) applies to the websites located at starbucks.com, starbucksreserve.com, princi.com, starbucks.ca, the Starbucks mobile applications available at https://www.starbucks.com/coffeehouse/mobile-apps (“Starbucks App”), when you visit our stores, and through any other websites or applications owned and operated by Starbucks brands or products that direct the viewer or user to this Notice (“Starbucks Services”). Our websites and mobile applications may offer links to websites and/or other mobile applications that are operated by third parties and not by Starbucks. If you visit one of these linked websites, you should read the website’s privacy notice, terms and conditions, and their other policies. We are not responsible for the policies and practices of third parties. Any information you give to those organizations is governed under their privacy notice, terms and conditions, and other policies."
};

// Call the function with the data and container ID
createStrongParagraphElements(contentDetail1, 'content_privacy');

const contentDetail2 = {
  "Updates to this Privacy Notice": "We may update this Notice from time to time. We will notify you of material changes to this Notice and will update the Last Revised date on this Notice. We encourage you to look for updates and changes to this Notice when you access our websites and mobile applications.",
}
createStrongParagraphElements(contentDetail2, 'content_privacy');

const contentDetail3 = {
  "Information We Collect": [
    {
      "When you visit and use the Starbucks Services, we may collect the following categories of information:": [
        "Identifiers – We may collect information that can be used to identify you, such as your first and last name, phone number, your address book, username and password, email address, postal address, IP address, day and month of your birthday, and demographic information (such as gender).",
        "Financial Information – We may also collect information such as your credit card and debit card information, telephone number, and name.",
        "Commercial Information – We may collect information about your transactions in our stores, on our websites or via our Starbucks App including what products you purchase, how frequently you purchase them, any Rewards or promotions associated with a purchase, and the products you have placed on your “Wishlist” or “My Bag” for future purchase.",
        "Electronic Network Activity Information – We may collect information related to your electronic network activity, such as your browsing history, information about how you use the Starbucks Services, information about your device, and information related to Starbucks website’s “live help” chat feature.",
        "Geolocation Information – We may collect information about your location of your device, such as information derived from your device (e.g., based on a browser or device’s IP address).  We may also use location-based technology in our retail locations, to collect information about the presence of your device, if your Bluetooth is turned on and your device settings allow for this.",
        "Audio and Visual Information – We may collect audio and visual information when you use the Starbucks Services.  For example, closed circuit video surveillance cameras (“CCTV”) may be installed at some of our retail locations to monitor building security and assist in crime prevention, detection, and investigation, and to ensure the safety of our staff and visitors to our facilities, and these CCTV cameras may collect audio, visual, and similar information.  Also, depending on your choices, we may collect audio information when you use voice ordering.",
        "Inferences – We may also collect inferences drawn from the other information described above.",
        "Other – We may collect other information that you voluntarily provide when you communicate with us."
      ]
    },
  {
    "Additionally, depending on how you use the Starbucks Services, we may collect the following categories of sensitive personal information from you:":["Precise Geolocation Information – We may collect information about the precise location of your device (e.g., GPS latitude and longitude), consistent with your device settings. We may also use location-based technology in our retail locations, to collect information about the presence of your device, if your Bluetooth is turned on and your device settings allow for this. We may collect this location information or derive it from your GPS, WiFi, Bluetooth or other location-based technology for purposes of facilitating our services, such as to provide you with information about stores near you, to enable you to remotely order and pay for our products and services, or so that you may have certain Starbucks products delivered to you by a third-party vendor."

    ]
  },
  {
    "We may aggregate or de-identify the information described above.  Aggregated or de-identified data that we do not attempt to reidentify is not subject to this Notice.": [],
  },
  {
    "Without this information, we may not be able to provide you with all the requested services.": []
  }
  ],
};
// Call the function with the content object and container ID
createContentElements(contentDetail3, 'content_privacy');

const contentDetail4 = {
  "Sources of InformationIn" : "addition to the information we receive from you, we may also receive the categories of information described above from other sources including from other users of Starbucks Services (such as when they purchase a gift for you), advertising partners, co-sponsors, internet service providers, data analytics providers, operating systems and platforms, social networks, and publicly available sources.  For example, if you access any social media or similar services through the Starbucks Services to login or to share information about your experience on our Starbucks Services with others, we may collect information from these third-party services."
}

createStrongParagraphElements(contentDetail4, 'content_privacy');

const contentDetail5 = {
  "How We Use Your Information":"We may use your information for business purposes, including to provide the products and services you request, to perform customer service functions, for security and fraud prevention, for marketing and promotional purposes, and to perform website and mobile application analytics.  We may use the information we collect about you to:"
}
createStrongParagraphElements(contentDetail5, 'content_privacy');

const howWeUseYourInformation = {
  "(a) To Provide Our Services - We may process your information when you access or use the Starbucks Services, including to:": [
    "process or fulfill orders and transactions",
    "maintain and service accounts",
    "support and improve our loyalty programs, such as Starbucks® Rewards",
    "deliver gift cards or e-gifts, and any associated personalized messages, in accordance with your instructions",
    "debug to identify and repair errors that impair existing functionality",
    "facilitate the functionality of our websites and mobile applications",
    "process payments",
    "customize experiences and personalization when you are in and around our stores, if you have given permission for location sharing"
  ],
  "(b) To Communicate With You - We may process certain information in order to communicate with you in relation to your accounts, our services, our marketing, and your requests, including to:": [

    "provide customer service, including when you interact with our customer service agents through our website’s “live help” chat feature, and requests for information",
    "communicate with you about orders, purchases, returns, services, accounts, programs, contests, and sweepstakes",
    "send you personalized promotions, content, and special offers",
    "communicate with you about our brands, products, events, or other promotional purposes",
    "implement your communications preferences, such as sharing information with Starbucks business partners so that they may email you about their promotions, products and initiatives",
    "provide important product safety information and notice of product recalls"
  ],
  "(c) For Research, Development, and Improvement of Our Services - We want to ensure that our website, mobile applications, and services are continually improving and expanding so that we meet and exceed your needs and expectations. To do so, we may process certain personal information, including to:": [
    "maintain, improve, and analyze our websites, mobile applications, ads, and the products and services we offer",
    "help to ensure security and integrity of the Starbucks Services, including to detect, prevent, or investigate suspicious activity or fraud"
  ],
  "(d) To Enforce our Terms, Agreements, or Policies - To maintain a safe, secure, and trusted environment for you when you use our websites, mobile applications, and other services, we may use your personal information to ensure our terms, policies, and agreements with you and any third parties are enforced": [
  ],
  "(e) To Comply with Applicable Laws - We may be required to process certain information under certain laws and regulations, such as tax laws, as well as to:": [
    "maintain appropriate records for internal administrative purposes",
    "comply with applicable legal and regulatory obligations, and respond to lawful governmental requests, as needed"
  ],
  "(f) Targeted Advertising - We may process your information to provide you with targeted advertising (also known as cross-contextual advertising and online behavioral advertising) and offers and promotions that you may be interested in": [

  ],
  "(g) With Your Consent - We may process certain information in order to fulfill any other business or commercial purposes at your direction or with your consent": [
  ]
};

const olContainer5 = document.createElement('ol');
olContainer5.setAttribute('id', 'createInformationElements');
olContainer5.classList.add("flex","flex-col",'gap-4')
container.appendChild(olContainer5)
// Function to create HTML elements for the information
// Call the function with the contentDetail object and container ID
createInformationElements(howWeUseYourInformation, 'createInformationElements');

const contentDetail6 = {
  "How We Disclose Your Information": "We may disclose your information as needed to fulfill the purposes described in this Notice and as permitted by applicable law."
}
  createStrongParagraphElements(contentDetail6, 'content_privacy');
const disclosureInformation = {
  "(a) When We Work Together - We may share information between and among Starbucks Corporation, its subsidiaries, and affiliated companies for purposes of management and analysis, decision making, and other business purposes. For example, we may share your information with our subsidiaries and affiliated companies to administer our loyalty programs, process orders and requests, and expand and promote our product and service offerings.": [],
  "(b) When We Work with Service Providers & Business Partners - We may share identifiers, commercial information, electronic and network activity, geolocation and precise geolocation information, audio and visual information, and inferences, as described above, for a variety of business purposes, such as payment processing, website and data hosting, location mapping, product and service delivery, customer service, advertising and marketing (including counting ad impressions, ensuring compliance with industry standards, personalization, analytics services, security and performance monitoring, maintaining and servicing accounts, processing or fulfilling orders and transactions, verifying customer information, research, auditing, and data processing. We strive to contractually prohibit these service providers and business partners from retaining, using, or disclosing your confidential personal information for any purpose other than performing agreed upon services for us.": [],
  "(c) When We Work on Business Transactions - If we become involved with a merger, corporate transaction or another situation involving the transfer of some or all of our business assets, we may share your information with business entities or people involved in the negotiation or transfer.": [],
  "(d) When Sharing Helps Us Protect Safety and Lawful Interests - We may disclose your information if we believe that the disclosure is required by law, if we believe that the disclosure is necessary to enforce our agreements or policies, or if we believe that the disclosure will help us protect the rights, property, safety of Starbucks or our customers or partners.": [],
  "(e) When You Give Consent - We may share information about you with other companies if you give us permission or direct us to share the information.":[],
  "(f) When You Post on Our Websites - If you post information on a blog or another part of our websites, the information that you post may be seen by other visitors to our websites.  We are not responsible for the information you choose to submit in these public areas.": [],
};
const olContainer6 = document.createElement('ul');
olContainer6.setAttribute('id', 'createInformationElements6');
olContainer6.classList.add("flex","flex-col",'gap-4')
container.appendChild(olContainer6)
createInformationElements(disclosureInformation, 'createInformationElements6');

const contentDetail7 = {
  "Cookies, Web Beacons and Similar Technologies": [
    {
      "We and others may use a variety of technologies to collect information about your device and use of our websites and mobile applications. These technologies include first- and third-party cookies, web beacons, JavaScript, entity tags, and HTML local storage. Most web browsers can be programmed to accept or reject the use of some or all of these technologies, although you must take additional steps to disable or control other technologies. For more information on exercising your preferences in relation to cookies and similar technologies, please see the section of this Notice titled “Your Choices & Rights”": [
        "Cookies – Cookies are small data files that are sent from a website’s server and are stored on your device’s hard drive either for only the duration of your visit (“session cookies”) or for a fixed period (“persistent cookies”). Cookies contain information that can later be read by a web server.You may be able to reject cookies, web beacons, entity tags and HTML5 local storage by adjusting the appropriate settings in your browser. Each browser is different, but many browsers have preferences or options that may be adjusted to allow you to either accept or reject cookies and certain other technologies before they are set or installed, or allow you to remove or reject the use or installation of certain technologies altogether. If you want to learn the correct way to modify your browser settings, please use the Help menu in your browser or review the instructions provided by the following browsers: Internet Explorer, Google Chrome, Mozilla Firefox, Safari Desktop, Safari Mobile; and Android browser."
      ,"Interest-Based Ads – Many advertising companies that collect information for interest-based advertising are members of the Digital Advertising Alliance (DAA) or the Network Advertising Initiative (NAI), both of which maintain websites where people can opt out of interest-based advertising from their members. To opt-out of website interest-based advertising provided by each organization’s respective participating companies, visit the DAA’s opt-out portal available at http://optout.aboutads.info/, the DAA of Canada’s opt-out portal available at https://youradchoices.ca/en/tools, or visit the NAI’s opt-out portal available at [http://optout.networkadvertising.org/?c=1.](http://optout.networkadvertising.org/?c=1.Residents)"
      ]
    },
  {
    "Residents](http://optout.networkadvertising.org/?c=1.Residents) of the European Union may opt-out of online behavioral advertising served by the European Interactive Digital Advertising Alliance’s participating member organizations by visiting https://www.youronlinechoices.eu/.To ":[]
  },
  {
    "opt-out of data collection for interest-based advertising across mobile applications by participating companies, download the DAA’s App Choices mobile application opt-out offering at https://youradchoices.com/appchoices.": [
      "Adobe Flash Player Technology – We allow Adobe to set and enable special cookies that are necessary to deliver video content for Adobe Flash Player. You cannot remove Flash cookies simply by changing your browser settings. If you would like to limit the websites that can store information in Flash cookies on your device, you must visit the Adobe website : <a href='http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html'></a>",
    "Web Beacons – Web beacons are small, transparent images that are embedded in web pages, applications, and emails that are sometimes called “clear gifs,” “single pixel gifs”, “page tags” or “web bugs.” We use web beacons to track the web pages you visit, to test the effectiveness of our marketing, and to find out if an email has been opened and acted on."
  ,"avaScript – JavaScript are code snippets embedded in various parts of websites and applications that facilitate a variety of operations including accelerating the refresh speed of certain functionality or monitoring usage of various online components.",
  "Entity Tags -- Entity Tags are HTTP code mechanisms that allow portions of websites to be stored or “cached” within your browser and validates these caches when the website is opened, accelerating website performance since the web server does not need to send a full response if the content has not changed.",
  "HTML5 Local Storage – HTML5 local storage allows data from websites to be stored or “cached” within your browser to store and retrieve data in HTML5 pages when the website is revisited. These and similar technologies are used for the following purposes:",
  "Services and Functionality – Some of these technologies are required to allow you to access and use our websites or mobile applications and the various services and functionality we offer. Without these technologies, some of the services and functionality on our websites and mobile applications would not work properly.",
  "Performance Monitoring – Some of these technologies help us analyze and estimate traffic and assess the volume of use of services and functionality on websites and mobile applications. They show us how visitors and customers interact with our digital properties, whether there are any errors, the degree to which certain web pages, applications, services or functionality are accessed and used and how they are performing or operating. When these technologies are used for performance monitoring, no directly identifiable information (e.g., your name, email address or phone number) is collected.",
  "User Convenience – Some of these technologies enhance the ease of use of our websites and mobile applications and the services and functionality they make available by accelerating load and refresh times and remembering information that you have provided on prior visits to our websites or when you last used a website or mobile application service or functionality.",
  "Marketing – Some of these technologies are used to tailor your experience on our website, within our mobile applications, or across your applications or devices by controlling the promotions, advertisements and other marketing messages that may appear when you access or use these or other digital properties.Taken together, these technologies help us learn which services and functionality you are using and how you are accessing information about us. We may use this information to personalize your visit to a website or use of a mobile application or to send you relevant promotions and advertisements.",
  ],
  },
]
};
createContentElements(contentDetail7, 'content_privacy');