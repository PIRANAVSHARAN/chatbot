function chatbot() {
 
    var question = prompt("How can I help you?");
   
    switch (question) {
    case "Admissions":
      console.log("The Admissions process begins with the Common App.");
      break;
    case "Classes":
      console.log("Classes at our college are small and personal.");
      break;
    case "Degrees":
      console.log("We offer a variety of undergraduate and graduate degrees.");
      break;
    case "Tuition":
      console.log("Tuition at our college is very affordable.");
      break;
    default:
      console.log("I'm sorry, I don't understand your question.");
      break;
    }
   
  }
   
  //chatbot();