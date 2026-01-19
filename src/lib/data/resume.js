const data = {
  courses: [
    {
      title: "Advanced JavaScript",
      url: "https://ui.dev/advanced-javascript",
      platform: "ui.dev",
      instructor: null,
      completedDate: "03/10/2023",
      certificateUrl: "/assets/advanced-javascript-certificate.pdf",
      description: "",//"Occaecat ea minim excepteur commodo exercitation laboris velit do. Culpa nisi elit eu labore aliqua ex anim.",
      imageUrl: "https://ui.dev/images/advanced-javascript-logo.svg",
    },
    {
      title: "React Hooks",
      url: "https://ui.dev/react-hooks",
      platform: "ui.dev",
      instructor: null,
      completedDate: "04/15/2022",
      certificateUrl: null,
      description: "",//"Anim ipsum excepteur adipisicing aliquip nulla pariatur exercitation aute consequat commodo officia veniam aliquip culpa. Culpa nisi elit eu labore aliqua ex anim. Adipisicing qui ea esse velit anim in do commodo nulla elit id. Fugiat do do tempor reprehenderit.",
      imageUrl: "https://ui.dev/images/hook.svg",
    },
    {
      title: "Redux",
      url: "https://ui.dev/c/redux/introduction-philosophy-and-tips",
      platform: "ui.dev",
      instructor: null,
      completedDate: "02/18/2023",
      certificateUrl: "/assets/redux-certificate.pdf",
      description: "",//Culpa nisi elit eu labore aliqua ex anim. Adipisicing qui ea esse velit anim in do commodo nulla elit id. Fugiat do do tempor reprehenderit.",
      imageUrl: "https://ui.dev/images/redux-logo.svg",
    }
  ],
  resume: {
    education: [
      {
        degrees: [
          "B.A. Sociology",
          "Computer Applications (Supplemental)",
        ],
        school: "University of Notre Dame",
        schoolUrl: "https://nd.edu",
        location: "Notre Dame, IN",
        start: "08/01/2006",
        end: "05/01/2011",
        honors: [
          {
            name: "Summa Cum Laude",
            detail: "College of Arts and Letters",
          },
          {
            name: "Phi Beta Kappa",
            detail: "They made me pay a fee...",
          },
          {
            name: "Alpha Kappa Delta",
            detail: "International Sociology Honor Society",
          },
        ]
      },
      // {
      //   title: "Dev Bootcamp (Chicago)",
      //   school: "Dev Bootcamp",
      //   schoolUrl: null,
      //   location: "Chicago, IL",
      //   start: "01/01/2014",
      //   end: "04/01/2014",
      //   honors: []
      // },
    ],
    skills: {
      technical: [
        {
          label: "JavaScript",
          type: "language",
          detail: ""
        },
        {
          label: "TypeScript",
          type: "language",
          detail: ""
        },
        {
          label: "React",
          category: "library",
          detail: ""
        },
        {
          label: "Redux",
          category: "library",
          detail: ""
        },
        {
          label: "Vue",
          category: "framework",
          detail: ""
        },
        {
          label: "Nuxt",
          category: "framework",
          detail: ""
        },
        {
          label: "Ember",
          category: "framework",
          detail: ""
        },
        {
          label: "Next.js",
          categoryof: "framework",
          detail: ""
        },
        {
          label: "HTML5",
          category: "language",
          detail: ""
        },
        {
          label: "Digital Accessibility",
          category: "other",
          detail: ""
        },
        {
          label: "CSS, SASS, LESS",
          category: "language",
          detail: ""
        },
        {
          label: "Playwright",
          type: "testing",
          detail: ""
        },
        {
          label: "Jest, React Testing Library",
          type: "testing",
          detail: ""
        },
        {
          label: "Responsive Web Development",
          type: "other",
          detail: ""
        },
        {
          label: "Git",
          type: "other",
          detail: ""
        },
        {
          label: "RESTful APIs",
          type: "other",
          detail: ""
        },
        {
          label: "Component Libraries & UI Kits",
          type: "other",
          detail: "ChakraUI, Bootstrap, Material UI"
        },
        {
          label: "Agile Methodologies",
          type: "other",
          detail: ""
        }
      ],
      soft: [
        {
          label: "Mentorship & Teaching",
          detail: "Dedicated to mentorship, teaching and helping others"
        },
        {
          label: "Empathy to be an effective teammate",
          detail: ""
        },
        {
          label: "15+ years of coding experience throughout the stack",
          detail: ""
        },
        {
          label: "Committed to ongoing professional growth and development",
          detail: ""
        },
        {
          label: "Passion for high quality solutions, ease of code maintenance, and quality documentation",
          detail: ""
        },
        {
          label: "Effective writer and communicator for audiences with varying technical skills",
          detail: ""
        }
      ],
    },
    experience: [
      {
        year: "August 2022-Present",
        title: "Software Engineer",
        location: "Chicago, IL (Remote)",
        company: "Euna Solutions",
        start: "08/01/2022",
        end: "Present",
        companyUrl: "https://thecitybase.com/",
        description: [ `Decreased time to run automated Playwright test suite in CI pipeline by ~10% using Docker and GitHub Actions`, `Became the subject matter expert for accessibility, floating between teams to educate and ensure future compliance with the Web Content Accessibility Guidelines 2.2 Level AA`, `Increased frontend test coverage with Playwright, React Testing Library, TestCafé, and Jest`, `Converted JavaScript into TypeScript across multiple frontends`     ],
        technologies: [ "JavaScript", "React", "TypeScript", "Functional Programming", "Accessibility", "Storybook", "GitHub Actions", "Redux", "Jest", "Playwright", "TestCafé"],
        honors: [{
          name: "Employee of the Sprint (2x)",
          detail: ""
        }]
      },
      {
        year: "January 2022 - June 2022",
        title: "Senior Front End Engineer",
        location: "Oakland, CA (Remote)",
        company: "Nabis",
        start: "01/01/2022",
        end: "06/01/2022",
        companyUrl: "https://nabis.com",
        description: [ `Led the overhaul of the existing UI and UX using React and the Chakra UI component library`, `Created, contributed to, and supervised multiple contractors in the development of a new design system`, `Updated marketplace search to be compliant with the WCAG 2.2. Level AA` ],
        technologies: [ "JavaScript", "React", "TypeScript", "ChakraUI", "SASS", "E-Commerce", "Accessibility", "Mentorship" ],
        honors: []
      },
      {
        year: "February 2021 - December 2021",
        title: "Software Engineer",
        company: "Vivint Smart Home, Inc",
        location: "Lehi, UT",
        start: "02/01/2021",
        end: "12/31/2021",
        companyUrl: "https://www.vivint.com/",
        description: [ `Saved sales engineers from two months of database work by proposing a UI-based solution that took one hour to implement`, `Created a front end style guide for cross-team code quality standards on the front end using Confluence and Storybook`, `Executed fullstack tasks using the Salesforce API, Postgres, JavaScript, Ember, and Vue`],
        technologies: [ "Ember", "Vue", "LESS", "TypeScript", "E-Commerce", "JavaScript", "Salesforce" ],
        honors: [ { name: "Innovation Week Presenter", detail: "November 2021" } ]
      },
      {
        year: "February 2019 - February 2020",
        title: "Front End Developer II",
        company: "Clearlink",
        location: "Salt Lake City, UT",
        start: "02/01/2020",
        end: "02/01/2021",
        companyUrl: "https://www.clearlink.com/",
        description: [ `Mentored and supported junior developers`, `Learned how to use the React-based Gatsby framework as a static site generator, eventually becoming an SME for all frontend developers on the team`, `Supported a broad range of browsers and devices with a focus on accessibility and modular code`],
        technologies: [ "JavaScript", "PHP", "React", "Gatsby", "Responsive Web Development", "Mentorship" ],
        honors: [ { name: "Frontend Project Showcase Winner", detail: "July 2020" }, { name: "Frontend Project Showcase Winner", detail: "Oct 2020" } ]
      },
      {
        year: "April 2018 - June 2019",
        title: "Software Engineer",
        company: "The Scion Group",
        location: "Chicago, IL",
        start: "04/01/2018",
        end: "05/31/2019",
        companyUrl: "https://www.thesciongroup.com/",
        description: [ `Increased average page load speed by a factor of four by eliminating n+1 queries in Ruby on Rails application`, `Lead and helped to implement the redesign of the internal business intelligence tool frontend, start to finish`, `Converted ancient JavaScript code to improve the developer experience using StimulusJS, DataTables, Highcharts, Rails 5, and data from multiple third party APIs including ADP, Entrata, Centro, and Chatmeter`, `Helped to aggregate hundreds of millions of records daily via an ETL process using SQL Server, multiple APIs, and Snowflake into a data warehouse` ],
        technologies: [ "Ruby", "Ruby on Rails", "JavaScript", "SQL", "StimulusJS", "Highcharts", "DataTables", "Snowflake", "ETL" ],
        honors: []
      },
      {
        year: "July 2015 - September 2017",
        title: "Software Engineer",
        company: "NCSA Next College Student Athlete",
        location: "Chicago, IL",
        start: "07/01/2015",
        end: "09/31/2017",
        companyUrl: "https://www.ncsasports.org/",
        description: [ `Floated between the separate design team and engineering teams, leveraging LESS, CoffeeScript, Slim, JavaScript, React, Backbone, Ruby, Ruby on Rails, and ActiveRecord` ],
        technologies: [ "JavaScript", "Backbone", "Ruby", "Ruby on Rails", "Less", "React", "CoffeeScript", "Slim", "ActiveRecord" ],
        honors: []
      },
      {
        year: "August 2014 - March 2015",
        title: "Junior Frontend Engineer",
        company: "DialogTech (now Invoca)",
        location: "Chicago, IL",
        start: "09/01/2014",
        end: "03/31/2015",
        companyUrl: "https://www.invoca.com/",
        description: [ `Converted mockups into responsive, data-driven web pages with MongoDB, Node, Express, Backbone, Less, Node, Mustache, Lodash, and Handlebars` ],
        technologies: [ "JavaScript", "Backbone", "Node", "Git", "LESS" ],
        honors: []
      },
      {
        year: "May 2014 - July 2014",
        title: "Rails Developer",
        company: "Blueye Creative",
        location: "Chicago, IL",
        start: "09/01/2014",
        end: "03/31/2015",
        companyUrl: "https://no.linkedin.com/company/blueye",
        description: [ `Built a new database for Wilson’s tennis racket inventory with a Microsoft Access front end and Ruby on Rails`, `Created a script to parse, import, and restructure years of inconsistently formatted Excel spreadsheet data with Ruby scripts` ],
        technologies: [ "Ruby", "Ruby on Rails", "Microsoft Access", "SQL" ],
        honors: []
      },
      {
        year: "May 2011 - December 2013",
        title: "Web Support Developer",
        company: "University of Notre Dame",
        location: "Notre Dame, IN",
        start: "05/01/2011",
        end: "12/31/2013",
        companyUrl: "https://nd.edu",
        description: [ `Served as the sole support developer for ~400 websites built with a homegrown Ruby on Rails-powered content management system`, `Designed, developed and wrote up an extensive troubleshooting guide and supporting documentation for our CMS to aid clients`, `Excelled at writing for support blog and communication with non-technical clients`, `Led weekly trainings in the Rails-based content management system with a focus on search engine optimization and understandable content for clients with varying levels of technical proficiency`, `Provided great customer service over the phone, in-person, and via email for clients that resulted in an Employee of the Quarter distinction`, `Converted PSD mockups into mobile-first, responsive websites utilizing liquid templating, HTML5, and CSS` ],
        technologies: [ "JavaScript", "HTML5", "CSS", "Liquid", "CMS", "Customer Service", "Responsive Web Development" ],
        honors: [{
          name: "Employee of the Quarter",
          detail: "Fall 2013"
        }]
      }
    ]
  }
}

export default data;
