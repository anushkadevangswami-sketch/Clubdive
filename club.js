const data = {

  csi: {
    name: "PICT CSI",
    tagline: "Computer Society of India.",
    about: "If you’re passionate about coding and modern tech, PICT CSI is the place to be. From web development and AI/ML to hackathons and large-scale events like XENIA, the club provides hands-on learning, mentorship, and a strong community to help you grow and become industry-ready.",
    category: "Technical",
   
    events: "2",
    hero: "CSI1.jpeg",
    tags: ["Code", "Build", "Dominate"],
    pastEvents: [
      {
        date: "Feb",
        title: "Xenia",
        desc: "Featuring hackathons, coging contests and non-technical events .",
        img: "XENIA.jpeg"
      }
      
    ]
  },

  acm: {
    name: "PICT ACM",
    tagline: "Global computing community.",
    about: "PICT ACM is perfect for students who want to sharpen their coding skills and build a strong career profile. With competitions, workshops, and focused learning groups in areas like Python and design, it helps you grow technically while preparing for internships and placements",
    category: "Technical",
    
    events: "3",
    hero: "ACM1.jpeg",
    tags: ["Hack", "Learn", "Grow"],
    pastEvents: [
      {
        date: "Oct",
        title: "Pulzion",
        desc: "Featuring 7 technical and 6 non-technical events.",
        img: "PULZION.jpeg"
      }
    ]
  },

  ieee: {
    name: "PICT IEEE",
    tagline: "Innovate with Technology.",
    about: "One of the largest tech communities on campus, IEEE (PISB) gives you exposure to cutting-edge technologies through hackathons, coding challenges, and industry-driven events. It’s a great platform to explore innovation and build real-world skills.",
    category: "Technical",
    
    events: "1",
    hero: "IEEE1.jpeg",
    tags: ["Electronics", "Innovation"],
    pastEvents: [
      {
        date: "Feb",
        title: "Credenz",
        desc: "Celebration of technical prowess, competitions and industry interactions .",
        img: "CREDENZ.jpeg"
      }
    ]
  },

  gamedev: {
    name: "GameDev Utopia",
    tagline: "Create games and worlds.",
    about: "Love games or creative tech? GameDevUtopia lets you dive into game design, animation, and AR/VR. Through game jams, workshops, and competitions, you get to build your own interactive experiences while learning powerful tools like Unity and Blender.",
    category: "Technical",
    
    events: "1",
    hero: "GAMEDEV1.jpeg",
    tags: ["Gaming", "Development"],
    pastEvents: [
      {
        date: "Feb",
        title: "Glitched",
        desc: "Includes game jams, design challenges and game showcases.",
        img: "GLICHED.jpeg"
      }
    ]
  },

  robotics: {
    name: "PICT Robotics",
    tagline: "Build Intelligent Machines.",
    about: "For those who enjoy building and experimenting, PICT Robotics offers hands-on experience with robots, electronics, and automation. With participation in national competitions, it’s the perfect club to turn your ideas into real working machines.",
    category: "Technical",
    
    events: "1",
    hero: "ROBOTICS1.jpeg",
    tags: ["Build", "Control", "Compete"],
    pastEvents: [
      {
        date: "Mar-Jul",
        title: "Robocon",
        desc: "CAD modeling, field performance assessments and innovationns.",
        img: "ROBOCON.jpeg"
      }
    ]
  },

  auto: {
    name: "PICT Automobile Club",
    tagline: "Engineering meets speed.",
    about: "If cars and engineering excite you, this club lets you design and build race karts from scratch. It’s all about practical learning, teamwork, and competing at national-level events — a dream space for automobile enthusiasts.",
    category: "Technical",
    
    events: "0",
    hero: "AUTOMOBILE1.jpeg",
    tags: ["Design", "Race", "Win"],
  },

  tedx: {
    name: "TEDxPICT",
    tagline: "Ideas Worth Spreading.",
    about: "TEDxPICT brings powerful ideas to life through inspiring speaker sessions and thoughtfully curated events. It’s ideal for students who enjoy exploring big ideas, storytelling, and meaningful conversations.",
    category: "Leadership",
    
    events: "1",
    hero: "TEDX1.jpeg",
    tags: ["Inspire", "Change"],
    pastEvents: [
      {
        date: "Sep-Oct",
        title: "TEDxPICT",
        desc: "Thought provoking discussion, dynamic speakers and curiosity.",
        img: "TEDXPICT.jpeg"
      }
    ]
  },

  debate: {
    name: "PICT DEBSOC",
    tagline: "Enhancing self-expression.",
    about: "Want to speak confidently and think critically? DEBSOC helps you master debate, public speaking, and communication through regular sessions, competitions, and engaging discussions.",
    category: "Leadership",
    
    events: "1",
    hero: "DEBSOC1.jpeg",
    tags: ["Argue", "Express"],
    pastEvents: [
      {
        date: "Feb",
        title: "Paricharcha",
        desc: "Intra-college public speaking event.",
        img: "PARICHARCHA.jpeg"
      }
    ]
  },

  mun: {
    name: "PICT MUN",
    tagline: "Diplomacy & global thinking.",
    about: "Step into the world of global diplomacy with PICT MUN. By simulating United Nations committees, the club helps you develop research, negotiation, and public speaking skills while understanding real-world issues.",
    category: "Leadership",
    
    events: "1",
    hero: "MUN1.jpeg",
    tags: ["Debate", "Govern"],
    pastEvents: [
      {
        date: "Aug-Sep.",
        title: "PICT MUN Annual Conference.",
        desc: "Provide a diverse range of debate topics.",
        img: "PICTMUN.jpeg"
      }
    ]
  },

  edc: {
    name: "EDC PICT",
    tagline: "Entrepreneurship and innovation hub.",
    about: "EDC is where ideas turn into startups. Through business competitions, startup events, and networking opportunities, the club helps you develop an entrepreneurial mindset and bring your ideas to life.",
    category: "Leadership",
    
    events: "1",
    hero: "EDC1.jpeg",
    tags: ["Startup", "Business"],
    pastEvents: [
      {
        date: "Mar",
        title: "Magnate",
        desc: "Business acumen, Start-up pitching challenge and businness strategy showdown",
        img: "MAGNATE.jpeg"
      }
    ]
  },

  artcircle: {
    name: "PICT Art Circle",
    tagline: "Express Through Art.",
    about: "From music and dance to theatre and stage design, Art Circle is the hub of creativity on campus. It gives you the stage to perform, express, and showcase your talent in cultural events and competitions.",
    category: "Arts",
    
    events: "3",
    hero: "ARTCIRCLE1.jpeg",
    tags: ["Perform", "Shine"],
    pastEvents: [
      {
        date: "Apr",
        title: "Abhivyaktee",
        desc: "Dance, music, theatre and culturral competition.",
        img: "ABHI.jpeg"
      }
    ]
  },

  pictoreal: {
    name: "PICTOREAL",
    tagline: "Foster creative expression and media.",
    about: "PICTOREAL is all about storytelling and creative expression. Whether it’s writing, photography, podcasts, or publishing the college magazine, the club helps you bring ideas to life while building confidence and communication skills.",
    category: "Arts",
    
    events: "3",
    hero: "PICTOREAL1.jpeg",
    tags: ["Capture", "Create"],
    pastEvents: [
      {
        date: "Feb",
        title: "Pictofest",
        desc: "Art showcases, photography contest, exhibitions and activities.",
        img: "PICTOFEST.jpeg"
      }
    ]
  },

  nss: {
    name: "PICT NSS",
    tagline: "Serve society,make impact.",
    about: "Driven by the spirit of service, NSS gives you the chance to make a real difference through activities like volunteering, environmental drives, and community outreach programs.",
    category: "Social",
   
    events: "3+",
    hero: "NSS1.jpeg",
    tags: ["Service", "Community"],
    pastEvents: [
      {
        date: "Jan",
        title: "PICT NSS",
        desc: "Volunteering, 7-days camp and community services.",
        img: "NSS2.jpeg"
      }
    ]
  },

  sports: {
    name: "PICT Sports",
    tagline: "Unleash athletic potential.",
    about: "For those who love staying active, PICT Sports offers opportunities across multiple games, inter-collegiate and intra-collegiate competitions. It promotes teamwork, discipline, and a strong competitive spirit both on and off the field.",
    category: "Sports",
    
    events: "2",
    hero: "SPORTS1.jpeg",
    tags: ["Play", "Compete", "Rise"],
    pastEvents: [
      {
        date: "Feb",
        title: "Elevate",
        desc: "Inter-collegiate Annual sports competition.",
        img: "ELEVATE.jpeg"
      }
    ]
  }

};


// FETCH CLUB
const params = new URLSearchParams(window.location.search);
const clubId = params.get("club");
const club = data[clubId];

if (club) {

  document.getElementById("club-name").innerText = club.name;
  document.getElementById("club-tagline").innerText = club.tagline;
  document.getElementById("club-about").innerText = club.about;
  document.getElementById("club-category").innerText = club.category;

  document.querySelector(".club-hero").style.backgroundImage = `url(${club.hero})`;

 document.querySelector(".info-box").innerHTML = `
  <h3>Quick Info</h3>
  <p>📅 ${club.events} events hosted</p>

  <h4>Category</h4>
  <p>${club.category}</p>

  <h4>Tags</h4>
  <div class="tags">
    ${club.tags.map(tag => `<span>${tag}</span>`).join("")}
  </div>
`;

  const eventsHTML = club.pastEvents.map(event => `
    <div class="event-card">
      <img src="${event.img}">
      <div>
        <span class="date">${event.date}</span>
        <h3>${event.title}</h3>
        <p>${event.desc}</p>
      </div>
    </div>
  `).join("");

  document.getElementById("events-container").innerHTML = eventsHTML;
}