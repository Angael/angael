import { FILTER } from 'consts';

const getFilteredSkills = (list, filter, prof) => {
  return list.filter((skill) => {
    const { tags, proficiency } = skill;

    let tagMatches = false;
    if (filter === FILTER.all) {
      tagMatches = true;
    } else {
      tagMatches = tags.includes(filter);
    }

    if (!tagMatches) {
      return false;
    }

    const proficiencyMatch = proficiency.val >= prof;
    return proficiencyMatch && tagMatches;
  });
};

export default getFilteredSkills;
