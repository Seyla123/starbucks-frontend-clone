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
// "Overview": [
//   "This Starbucks Privacy Notice describes the types of personal information that Starbucks Corporation and its respective subsidiaries and affiliated companies (“Starbucks,” “we,” and “us”) collect, how we use it, how and when it may be shared, and the rights and choices you have with respect to your information. It also explains how we communicate with you and how you can make requests or submit inquiries to us about your information. Our goal is to help you understand how we use your information to improve our products, services, marketing, and interactions with you, as part of our commitment to maintaining your trust. Thank you for taking the time to read and understand our data and privacy related practices.",
//   "By continuing to use Starbucks Services you acknowledge this Privacy Notice and agree to our Terms of Use and other important policies, all available on our Online Policies page."
// ],

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

// Get the container element where you want to append the content
// const container = document.getElementById('content_privacy');
// // Get the keys (section titles) of the content dictionary
// // Get the length of the "Contents" array
// const length = contentDic.Contents.length;

// // Display the number of sections using alert
// alert("Number of sections: " + length);


// for (let i = 0;contentDic.length > i; i++) {
//   let contentHtml = `<strong class="text-base">${contentDic[i]}</strong>`;
//   for (let j = 0;contentDic[i].length > i; i++){
//     alert(contentDic[i][j]);
//      contentHtml += `<p class="mt-8">${contentDic[i][j]}</p>`;

//   }
//   container.innerHTML += contentHtml;
// }



// // Loop through each section in the information dictionary
// Object.keys(information).forEach(sectionKey => {
//   const section = information[sectionKey];

//   // Create HTML string for the section
//   let html = `<strong class="text-base ">${section.title}</strong><ol type="a">`;

//   // Loop through each point in the section
//   section.points.forEach(point => {
//     html += `<li><h3>${point.label}</h3><p>`;
//     // Add details for each point
//     point.details.forEach(detail => {
//       html += `${detail}<br>`;
//     });
//     html += `</p></li>`;
//   });

//   html += `</ol>`;

//   // Append the HTML string to the container
//   container.innerHTML += html;
// });
