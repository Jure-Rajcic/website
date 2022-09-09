
function calculateOffer() {
  const job = document.querySelector("#job").value;
  const message = document.getElementById('message').value;
  const salary = document.querySelector("#salary").value;

  let jobSalary = averageJobSalary(job);
  let reject = jobSalary == 0 || salary < averageJobSalary(job) + extraSkillBonus(message);

  const locked = document.getElementsByClassName("locked");
  for (let i = 0; i < locked.length; i++) {
    locked[i].style.display = reject ? 'none' : 'flex';
  }
  document.querySelector("#error").style.display = reject ? 'flex' : 'none';
}