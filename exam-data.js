window.EXAM_DATA = {
  meta: { testNumber: 'ETS-PT4' },

  // ── MODULE 1 ────────────────────────────────────────────────────────────────
  m1: {
    r1: {
      segs: [
        "Modern biochemistry focuses on the chemical processes within and related to living organisms. It ",
        " a laboratory-based ",
        " that ",
        " biology ",
        " chemistry. Biochemists ",
        " how cells ",
        " and ",
        ", exploring ",
        " fundamental ",
        " that ",
        " life. The field has advanced our understanding of how diseases occur and how they can be treated or prevented.",
        " Techniques such as molecular cloning and protein analysis are central to biochemistry, leading to innovations in medicine and biotechnology."
      ],
      blanks: [
        { prefix: "i",      suffix: "s",        ans: "is"          },
        { prefix: "sci",    suffix: "ence",      ans: "science"     },
        { prefix: "comb",   suffix: "ines",      ans: "combines"    },
        { prefix: "a",      suffix: "nd",        ans: "and"         },
        { prefix: "inves",  suffix: "tigate",    ans: "investigate" },
        { prefix: "func",   suffix: "tion",      ans: "function"    },
        { prefix: "commu",  suffix: "nicate",    ans: "communicate" },
        { prefix: "t",      suffix: "he",        ans: "the"         },
        { prefix: "mecha",  suffix: "nisms",     ans: "mechanisms"  },
        { prefix: "sus",    suffix: "tain",      ans: "sustain"     }
      ]
    },
    reading: {
      texts: [
        {
          title: "Bella Italia Reservation",
          tag: "Email",
          content: "Subject: Bella Italia reservation\n\nDear Ms. Green,\n\nThis concerns your table reservation for 4 at Bella Italia Restaurant for December 5 at 7:00 P.M. Since you made your reservation more than two weeks ago, the $10.00 charge at the door for the night's live musical entertainment is waived.\n\nThank you,\nAnthony Russos",
          qi: [0, 1]
        },
        {
          title: "Library Computer Reservation System",
          tag: "Notice",
          content: "LIBRARY COMPUTER RESERVATION SYSTEM\n\n☐ Basic (Internet only)     ☐ Premium (Full software access)\n\nName: _______________\nLibrary Card Number: _______________\nComputer Station Preference: _______________\nRequested Date: _______________\nTime Slot:  ☐ 9–11 A.M.   ☐ 11 A.M.–1 P.M.   ☐ 1–3 P.M.   ☐ 3–5 P.M.\n\nMaximum reservation time: 2 hours per day. Premium stations require advance booking and may be reserved up to one week in advance. Basic stations are available on a first-come first-served basis same day only. Late arrival (more than 15 minutes) results in automatic cancellation. Photo ID required at check-in.",
          qi: [2, 3, 4]
        },
        {
          title: "Ancient Egyptian Medicine",
          tag: "Academic Passage",
          content: "Ancient Egyptian medicine was advanced for its time and laid the foundation for many modern practices. Egyptians believed the body was a system of channels similar to the Nile River. Illness was thought to be caused by blockages in these channels, like a blocked canal causing flooding. Treatments focused on unblocking channels using herbal remedies and physical interventions. One significant contribution of Egyptian medicine was surgical techniques. Ancient texts describe procedures like the removal of tumors and the setting of broken bones. They also record practices like cleaning wounds and disinfecting medical instruments. This suggests that Egyptian doctors understood the connection between cleanliness and preventing infections, a concept widely accepted only much later in history. In addition to surgery, Egyptians were skilled in pharmacology. They used substances like honey and willow bark to treat ailments. Modern science has validated some ancient remedies; for example, willow bark contains salicin, a precursor to aspirin, with pain-relieving properties. While Egyptians demonstrated an impressive body of knowledge, Egyptian medicine was also intertwined with religion. Many treatments involved prayers and rituals to invoke the favor of the gods. This blend of empirical practice and spiritual belief shows the complexity of ancient Egyptian medicine.",
          qi: [5, 6, 7, 8, 9]
        }
      ],
      qs: [
        { q: "How many people will dine with Ms. Green?", opts: ["2", "3", "4", "5"], ans: 1 },
        { q: "What will Ms. Green not be charged for?", opts: ["Canceling the reservation", "Rescheduling the reservation", "Listening to live music", "Inviting additional guests"], ans: 2 },
        { q: "What is this form used for?", opts: ["Applying for a new library card", "Reporting problems with library computers", "Booking time to use library computers", "Requesting software installation on computers"], ans: 2 },
        { q: "How far in advance can someone reserve a Premium station?", opts: ["The same day only", "Up to one week ahead", "Up to one month ahead", "Up to two weeks in advance"], ans: 1 },
        { q: "What happens if someone arrives 20 minutes late for their reservation?", opts: ["They can still use the computer for the remaining time.", "They must pay an additional fee.", "Their reservation is automatically canceled.", "They are moved to a Basic station instead."], ans: 2 },
        { q: "The author mentions \"a blocked canal causing flooding\" to explain", opts: ["the importance of the Nile River for Egyptian culture", "the ancient Egyptians' idea of why humans became sick", "the wide variety of illnesses common in ancient Egypt", "the connection between agriculture and medicine"], ans: 1 },
        { q: "The passage suggests that which of the following was a surprising achievement of ancient Egyptian medicine?", opts: ["Its procedures improved greatly over time.", "It understood the importance of cleanliness in preventing infections.", "Its use of Nile River water was often successful.", "Its understanding of the cause of illnesses was largely accurate."], ans: 1 },
        { q: "Why does the author discuss the use of willow bark?", opts: ["To suggest that some ancient remedies could be harmful", "To explain the invention of aspirin", "To highlight the variety of natural remedies available in Egypt", "To show that some ancient Egyptian remedies were effective"], ans: 3 },
        { q: "The word \"invoke\" in the passage is closest in meaning to", opts: ["request", "understand", "increase", "express"], ans: 0 },
        { q: "What role did religion play in ancient Egyptian medicine?", opts: ["Doctors were trained by religious authorities.", "Religious beliefs limited the kinds of medicine that could be used.", "Prayers and rituals were often a part of medical treatment.", "Doctors were thought to have special connections to the gods."], ans: 2 }
      ]
    }
  },

  // ── MODULE 2 ────────────────────────────────────────────────────────────────
  m2: {
    r1: {
      segs: [
        "Cognitive science and the study of consciousness delve into how humans and animals perceive the world, process information, and experience awareness. Cognition ",
        " mental ",
        " like ",
        ", learning, ",
        " decision-making, ",
        " consciousness ",
        " the ",
        " experience ",
        " being ",
        ". Researchers ",
        " tools such as brain imaging to explore these complex processes.",
        " Findings in this field have far-reaching implications, from improving mental health care to advancing artificial intelligence and educational practices."
      ],
      blanks: [
        { prefix: "encom",  suffix: "passes",   ans: "encompasses" },
        { prefix: "activ",  suffix: "ities",    ans: "activities"  },
        { prefix: "mem",    suffix: "ory",       ans: "memory"      },
        { prefix: "a",      suffix: "nd",        ans: "and"         },
        { prefix: "whe",    suffix: "reas",      ans: "whereas"     },
        { prefix: "invo",   suffix: "lves",      ans: "involves"    },
        { prefix: "subje",  suffix: "ctive",     ans: "subjective"  },
        { prefix: "o",      suffix: "f",         ans: "of"          },
        { prefix: "aw",     suffix: "are",       ans: "aware"       },
        { prefix: "u",      suffix: "se",        ans: "use"         }
      ]
    },
    reading: {
      texts: [
        {
          title: "Photography Class",
          tag: "Email",
          content: "Subject: Photography class\n\nDear Mr. Clark,\n\nUnfortunately, the photography class you registered for on October 20 has been rescheduled. It will now meet on October 28 at 6:00 P.M. instead of October 26 at 5:00 P.M. Your registration fee will be refunded if you have a scheduling conflict.\n\nRegards,\nEmily Rodriguez",
          qi: [0, 1]
        },
        {
          title: "Effective Communication in the Modern Workplace",
          tag: "Advertisement",
          content: "Effective Communication in the Modern Workplace\n\nA one-day intensive workshop for managers and team leaders. Learn practical strategies for conducting productive meetings, providing constructive feedback, and resolving workplace conflicts. Experienced facilitators will guide participants through interactive exercises and real-world scenarios. Workshop includes comprehensive workbook and light refreshments.\n\nEarly bird registration (before April 1): $195. Regular price: $245.\n\nLimited to 25 participants to ensure personalized attention.\n\nCertificate of completion provided for continuing education requirements.",
          qi: [2, 3, 4]
        },
        {
          title: "The Origins of Theater",
          tag: "Academic Passage",
          content: "European theater has ancient roots, evolving from the rituals and storytelling of early societies. The earliest performances took place in ancient Greece, where festivals honoring the god Dionysus included dramatic contests. These performances were essential to communal life and aimed to convey moral lessons. The Greeks developed distinct genres: tragedy and comedy. Tragedies by Aeschylus and others explored themes of fate, justice, and suffering. Comedies, like those by Aristophanes, satirized society and politics. The structure of Greek theater, with its chorus and masks, had a lasting impact on later cultures.\n\nThe tradition of theater continued in the ancient Roman Empire, where it became popular entertainment. [A] Roman theater borrowed from Greek precedents but introduced new elements like elaborate stage designs including, for example, statues of heroes or portraits of the imperial family. [B] These added layers of meaning and context to the plays and helped to convey the themes and narratives more effectively. Despite its rich history, theater faced decline during the Middle Ages in Europe (the period between 500 and 1500 C.E.). [C] However, it saw a resurgence during the following Renaissance period, leading to the flourishing of theater that laid the groundwork for modern theater. [D]",
          qi: [5, 6, 7, 8, 9]
        }
      ],
      qs: [
        { q: "When did Mr. Clark register for the class?", opts: ["On October 20", "On October 25", "On October 26", "On October 29"], ans: 0 },
        { q: "Why may Mr. Clark receive a refund?", opts: ["If he registered for the wrong class", "If he could not attend the class", "If he was dissatisfied with the class", "If he rescheduled the class"], ans: 1 },
        { q: "What is this advertisement promoting?", opts: ["A job training program for new employees", "A professional workshop on workplace communication", "A management certification course", "A conflict-resolution consulting service"], ans: 1 },
        { q: "What does someone gain by registering early?", opts: ["A reduction in cost", "A special certificate", "Guaranteed seating in the front row", "A one-on-one session with a facilitator"], ans: 0 },
        { q: "Why is participation limited to 25 people?", opts: ["To keep costs affordable for participants", "To meet continuing education requirements", "To provide personalized attention to participants", "To ensure everyone receives a workbook"], ans: 2 },
        { q: "A goal of the earliest theater performances in ancient Greece was to", opts: ["tell stories about the ancient societies that Greece evolved from", "honor important people in the community", "bring people from different groups together", "provide guidance on good and bad behavior"], ans: 3 },
        { q: "How did the plays of Aristophanes compare to those of Aeschylus?", opts: ["They were in a different genre.", "They were more focused on fate, justice, and suffering.", "They were more popular among politicians and other important members of society.", "They had a greater impact on later cultures."], ans: 0 },
        { q: "What was one effect of the elaborate stage designs of Roman theater?", opts: ["They added Greek elements to plays.", "They directed attention to the plays' creators.", "They increased the popularity of plays among members of the imperial family.", "They improved the communication of the plays' themes and narratives to viewers."], ans: 3 },
        { q: "The word \"resurgence\" in the passage is closest in meaning to", opts: ["change", "debate", "history", "comeback"], ans: 3 },
        { q: "There are four locations in the passage that indicate where the following sentence could be added: 'Few performances occurred around this time.' Where would it best fit?", opts: ["Option A", "Option B", "Option C", "Option D"], ans: 2 }
      ]
    }
  },

  // ── WRITING ─────────────────────────────────────────────────────────────────

  // w1: prefix = pre-filled text shown BEFORE the chip area (not arranged by student)
  //     suffix = pre-filled text shown AFTER the chip area (not arranged by student)
  //     words  = chips available to arrange (may include one distractor)
  //     ans    = the part the student must arrange (excluding prefix and suffix)
  w1: [
    {
      ctx:    "Where did you get your shoes?",
      prefix: "",
      suffix: ".",
      words:  ["visited", "had", "it", "last month", "the shop", "a sale", "I"],
      ans:    "The shop I visited last month had a sale"
    },
    {
      ctx:    "The workshop yesterday was very informative.",
      prefix: "",
      suffix: " soon?",
      words:  ["another one", "do", "there", "if", "be", "you know", "will"],
      ans:    "Do you know if there will be another one"
    },
    {
      ctx:    "The new restaurant downtown has amazing reviews.",
      prefix: "",
      suffix: "?",
      words:  ["know", "do", "if", "has", "vegetarian options", "have", "you", "they"],
      ans:    "Do you know if they have vegetarian options"
    },
    {
      ctx:    "That was a great movie we watched last night.",
      prefix: "Would you",
      suffix: "?",
      words:  ["that", "by", "director", "would", "like", "another film", "to see"],
      ans:    "like to see another film by that director"
    },
    {
      ctx:    "I'm planning to visit my grandparents next weekend.",
      prefix: "",
      suffix: "?",
      words:  ["to the airport", "tell me", "you", "can", "need", "a lift", "whether"],
      ans:    "Can you tell me whether you need a lift to the airport"
    },
    {
      ctx:    "The book you lent me was fascinating.",
      prefix: "",
      suffix: "?",
      words:  ["has", "you know", "have", "the author", "if", "other books", "do", "written"],
      ans:    "Do you know if the author has written other books"
    },
    {
      ctx:    "The new software update looks promising.",
      prefix: "On",
      suffix: "?",
      words:  ["able", "which", "the download", "website", "to find", "were you"],
      ans:    "which website were you able to find the download"
    },
    {
      ctx:    "The new coffee shop downtown is very popular.",
      prefix: "Is",
      suffix: "?",
      words:  ["that", "football matches", "you can", "on screen", "watch", "where", "the one"],
      ans:    "that the one where you can watch football matches on screen"
    },
    {
      ctx:    "We had a great time at the concert last night.",
      prefix: "",
      suffix: "?",
      words:  ["that band", "is performing", "when", "how", "find out", "again", "can we"],
      ans:    "How can we find out when that band is performing again"
    },
    {
      ctx:    "I really enjoyed the hiking trip last weekend.",
      prefix: "",
      suffix: " for this month?",
      words:  ["if", "more trips", "planned", "there are", "you", "tell me", "can"],
      ans:    "Can you tell me if there are more trips planned"
    }
  ],

  w2: {
    situation: "You are a student organizing a study group for an upcoming exam. You want to invite your classmates to join the group and explain to them your ideas about how the group should proceed.",
    tasks: [
      "Explain the purpose of the study group.",
      "Describe the topics you plan to cover during the study sessions and other ideas you have for the sessions.",
      "Suggest a time and location for the first meeting."
    ],
    toLine:  "classmates@university.edu",
    subLine: "Invitation to join study group",
    range:   [80, 120],
    rubric:  "A student writing an email to classmates inviting them to join a study group for an upcoming exam and suggesting how the sessions should be organized."
  },

  w3: {
    course: "Digital Media",
    prof: {
      name: "Dr. Achebe",
      msg:  "Next week we'll be discussing the impact of digital media on traditional forms of communication. Some argue that digital media has had a beneficial effect overall, as it has greatly improved global communication and connectivity. Others believe it has had a largely negative effect, leading to the decline of face-to-face interactions and reduced quality of relationships. What is your opinion on this?"
    },
    sa: {
      name: "Student A",
      txt:  "I believe digital media has primarily had a positive effect. It allows people to stay in touch over long distances with friends and family with whom they may not have had much contact otherwise. The convenience and speed of digital media allow people to communicate with ease."
    },
    sb: {
      name: "Student B",
      txt:  "Although it seems like a good thing on the surface, I think digital media has led to some serious problems. People often spend more time online than engaging in real-life conversations, which can erode social bonds and reduce the quality of communication with others. We need to find a balance between digital and traditional communication."
    },
    inst:  "Express and support your opinion on whether digital media has had a beneficial or negative effect on traditional forms of communication. Your response should be between 100 and 150 words.",
    range: [100, 150],
    rubric: "Student contributing to a discussion on whether digital media has had a beneficial or negative effect on traditional forms of communication."
  }
};
