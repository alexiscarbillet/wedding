// lang.js

const translations = {
  english: {
    site_title: "Larissa & Alexis' Wedding",
    nav_main: "Home",
    nav_dress: "Dress code",
    nav_why: "Why 2 weddings?",
    nav_rsvp: "RSVP",
    main_timeline: "Welcome to Larissa & Alexis' wedding website.",
    main_timeline_subtitle: "We are so excited to share our journey with you! Click on each event to see more details.",
    timeline_event_1_name: "The beginning",
    timeline_event_1_date: "September 15th, 2022",
    timeline_event_2_name: "She said yes!",
    timeline_event_2_date: "May 10th, 2025",
    timeline_event_3_name: "Engagement Party",
    timeline_event_3_date: "August 30th, 2025",
    timeline_event_4_name: "Wedding in France",
    timeline_event_4_date: "April 16th, 2026",
    timeline_event_5_name: "Wedding in Caribbean",
    timeline_event_5_date: "Jan–Feb 2027",
    timeline_paragraph_reminder: "Please do not forget to let us know if you are coming via {rsvp}.",

    modal1_title: "She said yes!",
    modal1_text: "A magical moment where she said YES 💍✨",
    modal2_title: "Engagement Party",
    modal2_text: "A joyful evening celebrating with friends and family.",
    modal3_title: "Wedding in France",
    modal3_text: "A small, intimate ceremony in Alexis’ home country — easier for his family to join us as we officially say “oui” and become husband and wife.",
    modal3_text2: "A WHITE DRESS IS ONLY FOR THE BRIDE! Please wear something pink.",
    modal4_title: "Wedding in Caribbean",
    modal4_text: "The big celebration! Easier for Larissa’s family to attend — a magical day to dress up, watch us walk down the aisle, and dance under the stars.",
    modal4_text2: "A WHITE DRESS IS ONLY FOR THE BRIDE! Please wear something pink. It will probably take place somewhere in Mexico as it seems to be one of the few destinations with direct flights from France.",
    modal5_title: "The beginning",
    modal5_text: "The beginning of our love story.",
    dress_title: "Dress code",
    dress_paragraph: "A Touch of Pink 💗",
    dress_paragraph_2: "Pink is the bride's favourite colour. We’d love for our guests to join in our celebration with a touch of pink! It doesn’t need to be your whole outfit (although it can be)—just a hint will do. Whether it’s a dress, tie, scarf, pocket square, shoes, or even jewelry, wear something pink to share in the joy of our special day.",
    wed_title: "Why 2 weddings?",
    wed_paragraph: "Our love story spans continents — and so will our celebrations! ",
    wed_paragraph_2: "With the groom’s family in France and the bride’s family in Canada, we wanted to make sure everyone could share in our joy. While everyone is welcome at both weddings, the celebration in France will be easier for Alexis’ family to attend, and the one in the Caribbean will be easier for Larissa’s family.",
    wed_paragraph_2_5:"First, we’ll have an intimate ceremony in France to sign the papers and officially become husband and wife.",
    wed_paragraph_3: "Then, we’ll gather in the Caribbean for the big celebration — a day for everyone to dress up, watch us walk down the aisle, and dance the night away together.",
    wed_paragraph_4: "Two weddings, one love, and double the joy!",
    rsvp_intro: "We can't wait to celebrate with you! Please let us know if you'll join us.",
    form_name: "Name",
    form_name_placeholder: "Your name",
    form_email: "Email",
    form_email_placeholder: "Your email",
    form_message: "Message",
    form_message_placeholder: "Your message",
    form_submit: "Send RSVP"
  },
  french: {
    site_title: "Mariage de Larissa & Alexis",
    nav_main: "Accueil",
    nav_dress: "Code vestimentaire",
    nav_why: "Pourquoi 2 mariages ?",
    nav_rsvp: "RSVP",
    main_timeline: "Bienvenue sur le site du mariage de Larissa & Alexis.",
    main_timeline_subtitle: "Nous sommes ravis de partager notre histoire avec vous ! Cliquez sur chaque événement pour plus de détails.",
    timeline_event_1_name: "Le commencement",
    timeline_event_1_date: "15 septembre 2022",
    timeline_event_2_name: "Elle a dit oui !",
    timeline_event_2_date: "10 mai 2025",
    timeline_event_3_name: "Fête de fiançailles",
    timeline_event_3_date: "30 août 2025",
    timeline_event_4_name: "Mariage en France",
    timeline_event_4_date: "16 avril 2026",
    timeline_event_5_name: "Mariage aux Caraïbes",
    timeline_event_5_date: "Janvier–Février 2027",
    timeline_paragraph_reminder: "N’oubliez pas de nous faire savoir si vous venez via le {rsvp}.",

    modal1_title: "Elle a dit oui !",
    modal1_text: "Un moment magique où elle a dit OUI 💍✨",
    modal2_title: "Fête de fiançailles",
    modal2_text: "Une soirée joyeuse célébrée avec amis et famille.",
    modal3_title: "Mariage en France",
    modal3_text: "Une petite cérémonie intime dans le pays natal d’Alexis — plus facile pour sa famille de se joindre à nous lorsque nous dirons officiellement « oui » et deviendrons mari et femme.",
    modal3_text2: "Un mariage en France (pas à Paris). LA ROBE BLANCHE EST RÉSERVÉE À LA MARIÉE ! Merci de porter quelque chose de rose.",
    modal4_title: "Mariage aux Caraïbes",
    modal4_text: "La grande fête ! Plus facile pour la famille de Larissa d’y assister — une journée magique pour se mettre sur son trente-et-un, nous voir descendre l’allée et danser sous les étoiles.",
    modal4_text2: "Un mariage aux Caraïbes. LA ROBE BLANCHE EST RÉSERVÉE À LA MARIÉE ! Merci de porter quelque chose de rose. Le lieu sera probablement au Mexique car il semble être une des rares destinations avec des vols directs depuis la France.",
    modal5_title: "Le commencement",
    modal5_text: "Le début de notre histoire d'amour.",
    dress_title: "Code vestimentaire",
    dress_paragraph: "Une touche de rose 💗",
    dress_paragraph_2: "Le rose est la couleur préférée de la mariée. Nous aimerions que nos invités participent à notre célébration avec une touche de rose ! Ce n’est pas obligé d’être toute votre tenue (même si ça peut l’être) — juste un petit détail suffit. Que ce soit une robe, une cravate, un foulard, une pochette, des chaussures ou même un bijou, portez quelque chose de rose pour partager la joie de notre journée spéciale.",
    wed_title: "Pourquoi deux mariages ?",
    wed_paragraph: "Notre histoire d’amour traverse les continents — et nos célébrations aussi !",
    wed_paragraph_2: "Avec la famille du marié en France et celle de la mariée au Canada, nous voulions que chacun puisse partager notre joie. Bien que tout le monde soit le bienvenu aux deux mariages, la célébration en France sera plus facile d’accès pour la famille d’Alexis, et celle dans les Caraïbes le sera pour la famille de Larissa.",
    wed_paragraph_2_5:"Nous commencerons par une cérémonie intime en France pour signer les papiers et devenir officiellement mari et femme.",
    wed_paragraph_3: "Ensuite, nous nous retrouverons dans les Caraïbes pour la grande célébration — une journée où tout le monde pourra se mettre sur son 31, nous voir descendre l’allée et danser ensemble toute la nuit.",
    wed_paragraph_4: "Deux mariages, un seul amour, et deux fois plus de joie !",
    rsvp_intro: "Nous avons hâte de célébrer avec vous ! Veuillez nous indiquer si vous serez des nôtres.",
    form_name: "Nom",
    form_name_placeholder: "Votre nom",
    form_email: "E-mail",
    form_email_placeholder: "Votre e-mail",
    form_message: "Message",
    form_message_placeholder: "Votre message",
    form_submit: "Envoyer la réponse"
  }
};

function applyTranslations(data) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (data[key]) {
      // Special case for timeline_paragraph_reminder
      if (key === "timeline_paragraph_reminder") {
        el.innerHTML = data[key].replace(
          "{rsvp}",
          `<u><b><a href="rsvp.html" style="color: white;">${data.nav_rsvp}</a></b></u>`
        );
      } else {
        el.textContent = data[key];
      }
    }
  });

  if (data.site_title) {
    document.title = data.site_title;
  }
}

// Set language and apply translations
function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language "${lang}" not found, defaulting to English.`);
    lang = 'english';
  }
  applyTranslations(translations[lang]);
  // Save user preference if you want
  localStorage.setItem('siteLang', lang);
}

// On page load, load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLang') || 'english';
  setLanguage(savedLang);
});
