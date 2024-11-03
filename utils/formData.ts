export default () => {
  return {
    version: "0.5",
    context: contextData,
    reflection: reflectionData,
  };
};

const contextData = [
  {
    id: "context-1",
    recap: "Who?",
    title: "Who are the users and robots?",
    text: "What are their demographics (age, gender, education, etc.)?\nWhat are their roles and responsibilities?",
    answer: "",
  },
  {
    id: "context-2",
    recap: "What?",
    title: "What are the users' goals?",
    text: "What are the primary tasks they need to accomplish?\nWhat are their motivations for using the robot?",
    answer: "",
  },
  {
    id: "context-3",
    recap: "Where?",
    title: "Where is the robot being used?",
    text: "Is it being used in a specific physical location (e.g., home, office, outdoors)?\nWhat environmental factors (lighting, noise, space) influence its use?",
    answer: "",
  },
  {
    id: "context-4",
    recap: "When?",
    title: "When (how long) is the robot being used?",
    text: "Is there a specific time of day, week, or year when the robot is used most?\nHow does the timing affect the user's interaction with the robot?",
    answer: "",
  },
  {
    id: "context-5",
    recap: "Why?",
    title: "Why is the robot being used?",
    text: "What problems or needs does the robot address?\nWhat are the user's expectations from the robot?",
    answer: "",
  },
  {
    id: "context-6",
    recap: "How?",
    title: "How is the robot being used?",
    text: "What steps do users take to accomplish their tasks?\nWhat tools or devices do they use in conjunction with the robot?",
    answer: "",
  },
  {
    id: "context-7",
    recap: "Social & Cultural",
    title: "What are the social and cultural contexts?",
    text: "Are there social norms or cultural factors that influence how the robot is used?\nHow do interactions with other people (colleagues, family, friends) affect usage?",
    answer: "",
  },
  {
    id: "context-8",
    recap: "Technical",
    title: "What are the constraints and limitations?",
    text: "Are there any physical, cognitive, or technological limitations users face?\nWhat budgetary, time, or resource constraints exist?",
    answer: "",
  },
];

const reflectionData = [
  {
    valueName: "agency",
    topics: [
      {
        topicName: "independence",
        valence: "positive",
        description:
          "The robot reduces the user's physical dependence on other humans; the user is independent in using the robot.",
        question:
          "Does the robot enhance the user's ability to perform tasks independently without needing human assistance? How does this impact their day-to-day activities and overall self-sufficiency?",
        references: [],
        answer: "",
      },
      {
        topicName: "dependence",
        valence: "negative",
        description: "The user can develop a physical dependence on the robot.",
        question:
          "Is there a risk that users might become overly reliant on the robot for tasks they could do without assistance? What are the potential long-term effects of this dependence?",
        references: [],
        answer: "",
      },
      {
        topicName: "control",
        valence: "positive",
        description:
          "The robot does not physically constrain or force the user.",
        question:
          "Does the robot allow the user to retain full control over its operations and interactions? Are there any scenarios where the user might feel constrained or forced by the robot?",
        references: [],
        answer: "",
      },
    ],
  },
  {
    valueName: "connectedness",
    topics: [
      {
        topicName: "companionship",
        valence: "positive",
        description: "The robot can provide companionship.",
        question:
          "Does the robot offer meaningful companionship that can enhance the user's social wellbeing? In what ways does this companionship compare to human companionship?",
        references: [],
        answer: "",
      },
      {
        topicName: "social enabler",
        valence: "positive",
        description: "The robot can facilitate connections between humans.",
        question:
          "Does the robot facilitate and encourage social interactions among users and their social circles? How does it enhance or complement existing social dynamics?",
        references: [],
        answer: "",
      },
      {
        topicName: "social substitute",
        valence: "negative",
        description: "The robot can reduce social interactions.",
        question:
          "Could the use of the robot reduce the frequency or quality of human-to-human interactions? How might this impact the user's social life and relationships?",
        references: [],
        answer: "",
      },
    ],
  },
  {
    valueName: "privacy",
    topics: [
      {
        topicName: "access",
        valence: "positive",
        description:
          "The users, or people selected by them, can have access to the data collected by the robot.",
        question:
          "Is the data collected by the robot accessible to users and relevant stakeholders in a transparent manner? How is this data access controlled and monitored?",
        references: [],
        answer: "",
      },
      {
        topicName: "consent",
        valence: "negative",
        description: "The robot invades bystanders' privacy.",
        question:
          "Does the robot have measures to obtain consent before collecting data from users or bystanders? How are privacy concerns of bystanders addressed?",
        references: [],
        answer: "",
      },
      {
        topicName: "intimacy",
        valence: "negative",
        description:
          "The robot's constant presence invades private spaces, causing discomfort and a panopticon effect.",
        question:
          "Does the robot's presence or functionality risk invading users' private spaces or causing discomfort? How do users perceive the robot's presence in their personal environments?",
        references: [],
        answer: "",
      },
      {
        topicName: "profiling",
        valence: "negative",
        description:
          "The robot collects data continuously or aggressively; data safety and protection.",
        question:
          "Does the robot's data collection practices respect user privacy and include strong data protection measures? How is the collected data used and stored?",
        references: [],
        answer: "",
      },
      {
        topicName: "transparency",
        valence: "positive",
        description:
          "The robot's functionalities and monitoring capabilities are clearly stated.",
        question:
          "Are the robot's functionalities and data collection practices clearly communicated to users? How are users informed about the robot's capabilities?",
        references: [],
        answer: "",
      },
    ],
  },
  {
    valueName: "autonomy",
    topics: [
      {
        topicName: "attachment",
        valence: "negative",
        description:
          "The user can develop an emotional dependency on the robot, reducing the autonomy.",
        question:
          "Is there a risk that users might develop an emotional dependency on the robot, affecting their autonomy? How can this emotional dependency be mitigated?",
        references: [],
        answer: "",
      },
      {
        topicName: "manipulation",
        valence: "negative",
        description:
          "The robot can influence the user with persuasion and nudging.",
        question:
          "Does the robot have mechanisms to ensure it does not manipulate or unduly influence the user? How are ethical considerations of persuasion and nudging addressed?",
        references: [],
        answer: "",
      },
    ],
  },
  {
    valueName: "equity",
    topics: [
      {
        topicName: "fairness",
        valence: "positive",
        description:
          "The robot treats everyone fairly according to their needs.",
        question:
          "Does the robot ensure fair treatment of all users, regardless of their individual differences? How is fairness measured and ensured?",
        references: [],
        answer: "",
      },
      {
        topicName: "bias",
        valence: "negative",
        description:
          "Some users do not feel part of the intended audience (algorithmic bias).",
        question:
          "Are there measures in place to prevent and address algorithmic bias in the robot's interactions? How is bias detected and corrected?",
        references: [],
        answer: "",
      },
      {
        topicName: "exclusion",
        valence: "negative",
        description:
          "The robot is not personalized to the user demographic: preferences, culture, economic background...",
        question:
          "Does the robot accommodate diverse user demographics and personalizations? How does it handle different cultural, economic, and personal preferences?",
        references: [],
        answer: "",
      },
      {
        topicName: "accountability",
        valence: "positive",
        description:
          "The person responsible for the robot's actions is fairly accountable.",
        question:
          "Is there clear accountability for the robot's actions and decisions? How is responsibility for the robot's actions communicated and enforced?",
        references: [],
        answer: "",
      },
    ],
  },
  {
    valueName: "dignity",
    topics: [
      {
        topicName: "tricking",
        valence: "negative",
        description:
          "The robot should not lie or trick the users into anthropomorphising its behaviour.",
        question:
          "Does the robot avoid using deceptive practices that might lead users to anthropomorphise it? Is the robot capable of lying?",
        references: [],
        answer: "",
      },
      {
        topicName: "degradation",
        valence: "negative",
        description:
          "The users might perceive interacting with a robot instead of a human as humiliating.",
        question:
          "Could interactions with the robot be perceived as degrading or humiliating by some users? How can the design prevent such perceptions?",
        references: [],
        answer: "",
      },
      {
        topicName: "identity disclosure",
        valence: "positive",
        description: "The robot's artificial nature is clearly stated.",
        question:
          "Is the robot's artificial nature and limitations clearly communicated to users? How is this transparency maintained?",
        references: [],
        answer: "",
      },
    ],
  },
  {
    valueName: "virtue",
    topics: [
      {
        topicName: "mentor",
        valence: "positive",
        description:
          "The robot can set a good example and foster virtuous interactions.",
        question:
          "Does the robot promote virtuous behaviors and set positive examples for users? How does it contribute to the user's moral and ethical development?",
        references: [],
        answer: "",
      },
      {
        topicName: "corruptor",
        valence: "negative",
        description:
          "The users can exercise unkind behaviour towards the robot, with negative effects on subsequent human interactions.",
        question:
          "Is there a risk that users might display unkind behaviours towards the robot that could negatively influence their interactions with other humans? How can such behaviors be discouraged?",
        references: [],
        answer: "",
      },
    ],
  },
  {
    valueName: "welfare",
    topics: [
      {
        topicName: "education",
        valence: "positive",
        description:
          "The robot can teach topics, thought processes, and routines.",
        question:
          "Does the robot effectively contribute to the user's learning and development by teaching new topics, thought processes, and routines? What educational methodologies does it employ?",
        references: [],
        answer: "",
      },
      {
        topicName: "nonjudgmental",
        valence: "positive",
        description:
          "The user can be sincere with the robot, as it has no sentiments.",
        question:
          "Does the robot provide a nonjudgmental environment that encourages users to express themselves freely? How does this affect user comfort and trust?",
        references: [],
        answer: "",
      },
      {
        topicName: "safety",
        valence: "positive",
        description: "The robot is safe and it does not harm the users.",
        question:
          "Is the robot designed and tested to ensure it does not pose any physical or psychological harm to users? What safety protocols are in place?",
        references: [],
        answer: "",
      },
      {
        topicName: "wellbeing",
        valence: "positive",
        description: "The robot allows disclosure and can give advice.",
        question:
          "Does the robot support the user's emotional and psychological wellbeing by providing a platform for disclosure and advice? How is this support integrated into its design?",
        references: [],
        answer: "",
      },
    ],
  },
];
