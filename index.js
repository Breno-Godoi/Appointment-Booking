	//object constructor for Advisers start:
    var academicAdvisor = {
        firstName: "",
        lastName: "",
        appointmentTime: [],
        services: []
    };

    function Advisor(firstName, lastName, appointmentTime, services) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.appointmentTime = appointmentTime;
        this.services = services;
    }
    //object constructor for Advisers ends.

    //object constructor for Appointment start:				
    var appointmentDetails = {
        advisorName: "",
        studentName: "",
        time: 0,
        serviceSelected: ""
    };

    function Appointment(advisorName, studentName, time, serviceSelected) {
        this.advisorName = advisorName;
        this.studentName = studentName;
        this.time = time;
        this.serviceSelected = serviceSelected;
    }
    //object constructor for Appointment ends.

    var advisorObjs = []; //empty string to store advisor object
    var appointmentObjs = [];  //empty string to store appointment objects

    //counter variables
    var advisorIndex = 0;
    var appointmentIndex = 0;

    var advisor1 = new Advisor("Mike", "Coulson", [9, 10, 11, 13], ["Resume", "Interview"]);
    var advisor2 = new Advisor("John", "Doe", [12, 13, 14, 15], ["Courses", "Withdrawals"]);
    var advisor3 = new Advisor("Alex", "Shun", [10, 13, 15, 17], ["Resume", "Portfolio", "Interview"]);

    advisorObjs.push(advisor1, advisor2, advisor3);

    var advisorObjectSelector = advisorObjs[advisorIndex];


    function displayAdvisor(advisorObjectSelector) {
        var advisorObjectSelector = advisorObjs[advisorIndex];
        document.getElementById('advisorInfo').innerHTML = "First Name = " + (advisorObjectSelector.firstName) + "<br>"
            + "Last Name = " + (advisorObjectSelector.lastName) + "<br>"
            + "Services = " + (advisorObjectSelector.services);
        displayAvailability(advisorObjectSelector);
    }


    function displayAvailability(advisorObjectSelector) {
        let avaibilityLenght = (advisorObjectSelector.appointmentTime.length);
            var _html = "";
            for (var i=0; i<avaibilityLenght; i++){
                _html += (advisorObjectSelector.appointmentTime[i]) + ":00" + "<br>";
            }
            document.getElementById('advisorTimes').innerHTML = _html;
    }

    function displayAppointment(appointmentObjs) {
        document.getElementById('apptOutput').innerHTML = "Advisor Name: " + (appointmentObjs[parseInt(appointmentIndex)].advisorName) + "<br>" +
            "Student Name: " + (appointmentObjs[appointmentIndex].studentName) + "<br>" +
            "Appointment Time: " + (appointmentObjs[appointmentIndex].time) + ":00" + "<br>" +
            "Service: " + (appointmentObjs[appointmentIndex].serviceSelected);
    }

    function makeAppointmentt() {
        let aptName = document.getElementById('aptName').value;
        let aptTime = document.getElementById('aptTime').value;
        let aptService = document.getElementById('aptService').value;
        let timeIndex = advisorObjectSelector.appointmentTime.indexOf(parseInt(aptTime)); //variable to store index of chosen time

        if (advisorObjs[advisorIndex].appointmentTime.includes(parseInt(aptTime)) == true && advisorObjs[advisorIndex].services.includes(aptService.charAt(0).toUpperCase() + aptService.slice(1)) == true) {

            alert("Appointmentt booked! See you soon");

            let newAppointmentt = new Appointment((advisorObjs[advisorIndex].firstName), aptName, aptTime, aptService);

            appointmentObjs.push(newAppointmentt);

            displayAppointment(appointmentObjs);

            advisorObjs[advisorIndex].appointmentTime.splice(timeIndex, 1);

            displayAvailability(advisorObjectSelector);

            document.getElementById('aptName').value = "";
            document.getElementById('aptTime').value = "";
            document.getElementById('aptService').value = "";

        }
        else { alert("Appointmentt is invalid!") }
    }

    function nextAdvisor() {
        if (advisorIndex == 0 || advisorIndex == 1) {
            advisorIndex++;
        }
        else {
            advisorIndex = 0;
        }

        displayAdvisor();
    }

    function nextAppoint() {
        var appointmentLenght = (appointmentObjs.length)-1;
        if (appointmentIndex < appointmentLenght) {
            appointmentIndex++;
            displayAppointment(appointmentObjs);
        }
        else {
            appointmentIndex = 0;
            displayAppointment(appointmentObjs);
        }
    }


    displayAdvisor();