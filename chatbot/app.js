function talk(){
    var know = {
    "who are you" : "I am college review Chatbot",
    "how are you" : "Good :)",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "":""
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }
    else if(user=="hi" || user=="Hi"){
        document.getElementById('chatLog').innerHTML = "Hi How can I help you";
    }
    /*else if(user=="what departments available in this college" || user=="what are departments available in this college"){
        document.getElementById('chatLog').innerHTML = departments;
    }*/
    else if(user=="what is last year percentage of placements" || user=="what is last year percentage of placements"){
        document.getElementById('chatLog').innerHTML = "Last year percentsge of placement is 97.99%";
    }
    else if(user=="highest package salary last year" || user=="highest package salary last year"){
        document.getElementById('chatLog').innerHTML = "8.4 LPA";
    }
    else if(user=="what are the co curricular activities are available" || user=="what are the co curricular activities are available"){
        document.getElementById('chatLog').innerHTML = "Japanese course\nBEC course\nNPTEL";
    }
    else if(user=="is there any extra curricular activities available" || user=="is there any extra curricular activities available"){
        document.getElementById('chatLog').innerHTML = "All sports and cultrals are available";
    }
    else if(user=="ranking of this college" || user.includes("ranking")){
        document.getElementById('chatLog').innerHTML = "In all India level ranking 113 in 2021 ";
    }
    else if(user=="what about hostel facilities" || user.includes("hostel facilities") || user.includes("hostel facility")){
        document.getElementById('chatLog').innerHTML = "3   hostels are available. A gym also available";
    }
    else if(user=="what about mess facilites" || user.includes("mess")){
        document.getElementById('chatLog').innerHTML = "Our hostel food is very tasty and affortable of cost";
    }
    else if(user=="library rules" || (user.includes("library")&& user.includes("rules"))){
        document.getElementById('chatLog').innerHTML = "To enter into the library ID card is mandatory. \n Silence is must, For more info about rules: https://www.mkce.ac.in/library-rules.php";
    }
    else if(user=="how many books in the library" || user.includes("library")){
        
        document.getElementById('chatLog').innerHTML = "There are 60929 books are available";
    }
    else if(user=="Counselling code of the college" || (user.includes("counselling")&&user.includes("code"))){
        document.getElementById('chatLog').innerHTML = "Counselling code : 2608";
    }
    else if(((user.includes("Top") || user.includes("top"))&&user.includes("companies")) || user.includes("placement")){
        document.getElementById('chatLog').innerHTML = "ZOHO, INFOSYS, WIPRO,TCS, CTS, MuSigma, IBM, Tech Mahindra";
    }
    else if(user=="rules and regulations" || (user.includes("college rules") || user.includes("regulations"))){
        document.getElementById('chatLog').innerHTML = "On every wednesdays all should come in formals. \n On other days shoe is compulsary";
    }
    else if(user=="It" || user.includes("IT")){
        
        document.getElementById('chatLog').innerHTML = "Information technology.";
    }
    else if(user=="Who is the Principal of your college" || user.includes("principal") || user.includes("Principal")){
        document.getElementById('chatLog').innerHTML = "Our college principal is N.Ramesh Babu";
    }
    else if(user=="What are the depatments available" || user.includes("departments") || user.includes("Departments")){
        
        document.getElementById('chatLog').innerHTML = "IT, CSE, EEE, ECE, MECH, AIML, AIDS, MBA, MCA, CIVIL, CSBS";
    }
    else if(user.includes("college name") || user.includes("College name")){
        
        document.getElementById('chatLog').innerHTML = "Our college name is M.Kumarasamy College of Engineering";
    }
    else if(user=="What is your name" || user.includes("Name") || user.includes("name")){
        
        document.getElementById('chatLog').innerHTML = "My name is Jarvis";
    }
    else if(user.includes("can do you") || user.includes("could you do")){
        
        document.getElementById('chatLog').innerHTML = "I am a college review chat bot I can tell the give clear information about this college";
    }
    else if(user.includes("HOD of IT") || user.includes("hod it")){
        
        document.getElementById('chatLog').innerHTML = "Our HOD name is Dr.R.Punithavathi";
    }
    else if(user.includes("IT") || user.includes("it")){
        
        document.getElementById('chatLog').innerHTML = "Depatment of INFORMATION TECHNOLOGY";
    }
    
    else if(user.includes("Secretary") || user.includes("secretary")){
        
        document.getElementById('chatLog').innerHTML = "Our Secretary name is K.Ramakrishnan";
    }
    else if(user.includes("about your college") || (user.includes("about") && user.includes("college"))){
        
        document.getElementById('chatLog').innerHTML = "M.Kumarasamy college of Engineering is an Autonomous Institution, approved by AICTE , New Delhi and Affiliated to Anna University, Chennai it was established in the year 2000.";
    }
    else if(user.includes("chairman") || (user.includes("Chairman") && user.includes("college"))){
        
        document.getElementById('chatLog').innerHTML = "M.Kumarasamy college of Engineering is an Autonomous Institution, approved by AICTE , New Delhi and Affiliated to Anna University, Chennai it was established in the year 2000.";
    }
    else if(user=="who are you" || user.includes("who r u")){
        
        document.getElementById('chatLog').innerHTML = "I am college review chatbot";
    }

    else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }

    