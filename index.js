window.addEventListener('load', () => {

  const rulesSections = document.getElementsByClassName('rule-section');

  const rulesSectionsClasses = ['rules-mainly', 'rules-admins', 'rules-player', 'rules-chat', 'rules-ranks'];

  rulesSections[0].addEventListener('click', () => {
    if (rulesSections[0].classList.contains(rulesSectionsClasses[0])) {
      rulesSections[0].classList.remove(rulesSectionsClasses[0]);
    } else {
      rulesSections[0].classList.add(rulesSectionsClasses[0]);
    }
  });
  rulesSections[1].addEventListener('click', () => {
    if (rulesSections[1].classList.contains(rulesSectionsClasses[1])) {
      rulesSections[1].classList.remove(rulesSectionsClasses[1]);
    } else {
      rulesSections[1].classList.add(rulesSectionsClasses[1]);
    }
  });
  rulesSections[2].addEventListener('click', () => {
    if (rulesSections[2].classList.contains(rulesSectionsClasses[2])) {
      rulesSections[2].classList.remove(rulesSectionsClasses[2]);
    } else {
      rulesSections[2].classList.add(rulesSectionsClasses[2]);
    }
  });
  rulesSections[3].addEventListener('click', () => {
    if (rulesSections[3].classList.contains(rulesSectionsClasses[3])) {
      rulesSections[3].classList.remove(rulesSectionsClasses[3]);
    } else {
      rulesSections[3].classList.add(rulesSectionsClasses[3]);
    }
  });
  rulesSections[4].addEventListener('click', () => {
    if (rulesSections[4].classList.contains(rulesSectionsClasses[4])) {
      rulesSections[4].classList.remove(rulesSectionsClasses[4]);
    } else {
      rulesSections[4].classList.add(rulesSectionsClasses[4]);
    }
  });


});