import React from 'react'

function Team() {
    const departmentOrder = [
        "Student Secretary ",
        "Joint Secretary (Management)",
        "Joint Secretary (Technical)",
        "Events",
        "Web Development",
        "Social Media",
        "Content",
        "Marketing",
        "Publicity",
        "Design",
        "Public Relations",
        "Hospitality",
        "Logistics",
        "Photography",
        "Security",
      ];
    
      const uniqueDepartments = Array.from(new Set(teamData.map((member) => member.Department)))
        .sort((a, b) => {
          const indexOfA = departmentOrder.indexOf(a);
          const indexOfB = departmentOrder.indexOf(b);
          return indexOfA - indexOfB;
        });
      const departmentsToMap = showThreeDepartments ? uniqueDepartments.slice(0, 3) : uniqueDepartments;
    
      return (
        <div className={style.main}>
          <div className={style.top}>team</div>
          <div className={style.bottom}>
            {loading ? (
              <Loader />
            ) : (departmentsToMap.map((department, index) => (
              <div className={style.bt} key={index}>
                <div>
                  {<Text prop={department === "Security" ? "Discipline & Protocol" : department} isStudentSec={department === 'Student Secretary '} />}
                </div>
                <div className={style.caraCont}>
                  <TeamCardsEffect teamMembers={teamData.filter((member) => member.Department === department)} />
                </div>
              </div>
            )))}
          </div>
        </div>
      );
}

export default Team