
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

selectors.forEach(s => {
    const el = document.querySelector(s)
    if (el) {
        console.log('removing', s)
        el.remove()
    }
    else {
        console.log('not found', s)
    }
})
