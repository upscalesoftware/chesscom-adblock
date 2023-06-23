
const selectors = [
    '#ad_unit',
    '#main-ad',
    '#special-upgrade-sidebar',
    '#board-layout-ad',
    '#tall-sidebar-ad',
    '.short-sidebar-ad-component',
    '.short-sidebar-ad-top',
    '.short-sidebar-ad-bottom',
    '.index-content-ad-wrapper',
    '.upgrade-push-down',
    '.r2d2-wrapper'
]

document.querySelectorAll(selectors.join(', ')).forEach((el) => el.remove());
