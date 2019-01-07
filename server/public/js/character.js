/* variable declrations*/
const attributeVals = document.querySelectorAll('.attributes .value');
const attributeMods = document.querySelectorAll('.attributes .modifier');

const skills = document.querySelectorAll('.skills input');
const skillVals = document.querySelectorAll('.skills input[type=number]');
const skillProfs = document.querySelectorAll('.skills input[type=checkbox]');

const proficiencyBonus = document.querySelector('.proficiency input[type=number]');

const saves = document.querySelectorAll('.saves input');
const savingThrowVals = document.querySelectorAll('.save input[type=number]');
const savingThrowProfs = document.querySelectorAll('.save input[type=checkbox]');

const level = document.querySelector('.level');

const raceDropDown = document.querySelector('.race');

// Get the play buttons to toggle from edit mode to play mode
const playButton = document.querySelector('button#play');
const editButton = document.querySelector('button#edit');
const dropdowns = document.querySelectorAll('select.play-lock');
const editableInputs = document.querySelectorAll('input.play-lock');

// This will change as the prof field changes
var oldProfBonus = proficiencyBonus.value;

/* Function definitions */
function handleCheckboxChange() {
}

function handleAttributeValueChange(e) {
  const attr = e;
  /*
  // If theres not mod on the attribute name we will not
  // update the skill. Otherwise we will

  To determine an ability modifier without consulting the table,
  subtract 10 from the ability score and then divide the total by
  2 (round down).

  // Attr name doesn't include mod,
  // update the modifer for the attr
  // ie if str=15, then str-mod = +3, etc
  */
  attributeVals.forEach(attribute => {
    // Get only the attirbute value,
    // modify the attrMod on this value
    if(attribute.name.includes(attr.name)) {
      const attrVal = attribute.value;
      attributeMods.forEach(attrMod => {
        // Iterate over each and change mod val if it belongs to attr
        if (attrMod.name.includes(attr.name)) {
          const mod = Math.floor((attr.value - 10) / 2);
          attrMod.value = mod;

					skillVals.forEach(skill => {
            // Find out if the skill is dependent on the skill we're
            // modifying
            const skillClass = [...skill.classList].join('');
            if (skillClass.includes(attr.name)) {
              skill.value = mod;
            }
          });

          savingThrowVals.forEach(save => {
            if(save.id === attr.name) {
              save.value = attrMod.value;
            }
          });
        }
      });
    }
  });
}

// Update the skill proficiency value based on the checkbox
function updateSkillProf () {
  // Update only one skill box, where this is the checkbox
  skillVals.forEach(skill => {
    if(this.id.includes(skill.id)) {
      // Update the skill value based on current proficiency-bonus
      const profBonus = parseInt(proficiencyBonus.value);
      skill.value = this.checked ?
        (parseInt(skill.value) + profBonus).toString() :
        (parseInt(skill.value) - profBonus).toString();
    }
  });
}

function handleAttributeModValueChange() {
  // Iterate over every skill and modify the skill if attr is
  // modified
  const attrModName = this.name;
  skillVals.forEach(skill => {
    // Find out if the skill is dependent on the skill we're
    // modifying
    const skillClassListStr = [...skill.classList].join('');
    if (skillClassListStr.includes(attrModName)) {
      skill.value = this.value;
    }
  });
  savingThrowVals.forEach(save => {
    if(attrModName.includes(save.id)) {
      save.value = this.value;
    }
  });
}

function updateSaveValue() {
}

// Update the saving throw based on the checkbox
function updateSaveProf() {
  // Update only one skill box, where this is the checkbox
  savingThrowVals.forEach(save => {
    if(this.id.includes(save.id)) {
      // Update the skill value based on current proficiency-bonus
      const profBonus = parseInt(proficiencyBonus.value);
      save.value = this.checked ?
        (parseInt(save.value) + profBonus).toString() :
        (parseInt(save.value) - profBonus).toString();
    }
  });
}

function updateProfBonus() {
	// Update the skills that the char is prof. in when this changes
	[skillProf, saveProf] = [false, false];
	const profBonus = parseInt(proficiencyBonus.value);

	skills.forEach(skill => {
		if(skill.id.includes('prof')) {
			skillProf = skill.checked ? true : false;
		}
		/*
		Increment the skill value by profBonus if the box is checked
		for that skill
		*/

		skill.value = skillProf ?
			(parseInt(skill.value) + profBonus - oldProfBonus) :
			parseInt(skill.value);
	});

	// Do the same thing but for saving throws instead
	saves.forEach(save => {
		if(save.id.includes('prof')) {
			saveProf = save.checked ? true : false;
		}
/*
		if(saveProf) {
			save.value = (parseInt(save.value) + profBonus - oldProfBonus);
		} else {
			save.value = parseInt(save.value);
		}
*/
		save.value = saveProf ?
			(parseInt(save.value) + profBonus - oldProfBonus) :
			parseInt(save.value);
	});
	oldProfBonus = profBonus;
}

function updateLevel() {
	// Proficiency bonus changes based on level at
	proficiencyBonus.value = Math.floor((7 + parseInt(level.value)) / 4);
	updateProfBonus();
}

function toggleMode(e) {
  const buttonVal = e.target.value;
  // only modify the fields that would normally be editable,
  // Eg ignore the skills, and saving throws, etc
  if(buttonVal === 'play') {
    // set the dropdowns to be disbaled
    dropdowns.forEach(dropdown => {
      dropdown.disabled = true;
    });
    // Set fillable fields to be uneditable
    editableInputs.forEach(input => {
      input.readOnly = true;
    });
  } else if(buttonVal === 'edit') {
    // set the dropdowns to be enabled
    dropdowns.forEach(dropdown => {
      dropdown.disabled = false;
    });
    // set fillable fields to be editable
    editableInputs.forEach(input => {
      input.readOnly = false;
    });
  }
}

/* Event listener calls */
// On change reupdate the value of each
attributeVals.forEach(attribute => {
  attribute.addEventListener('change', () => {
		handleAttributeValueChange(attribute);
	})
});

// Load the default values on page load
window.onload = () => {
	attributeVals.forEach(attribute => {
		handleAttributeValueChange(attribute);
	});
}

// On change reupdate the value of each
attributeMods.forEach(attribute => {
  attribute.addEventListener('change', handleAttributeModValueChange);
});

// On change reupdate the value of each
skillProfs.forEach(checkbox => {
  checkbox.addEventListener('change', updateSkillProf);
});

// On change reupdate the value of each
savingThrowVals.forEach(save => {
  save.addEventListener('change', updateSaveValue);
});

// On change reupdate the value of each
savingThrowProfs.forEach(save => {
  save.addEventListener('change', updateSaveProf);
});

// On change reupdate the value of each
proficiencyBonus.addEventListener('change', updateProfBonus);

// On change reupdate the value of each
level.addEventListener('change', updateLevel);

playButton.addEventListener('click', toggleMode);
editButton.addEventListener('click', toggleMode);
