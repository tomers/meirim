const { isTagApplyTable4FatherCategory} = require('../tags/utils');

const TAG_NAME = 'נחל';

const doesTagApply = async (plan, tagsResources) => {
    return await isTagApplyTable4FatherCategory(plan.id,
        (fatherCategory) => fatherCategory.includes('נחל'),
        TAG_NAME,
        tagsResources,
        {rule: `has ${TAG_NAME} in a father category in chart 4`}
    );
};

module.exports = {
    doesTagApply,
    TAG_NAME
};