const currentTheme = sessionStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

const themeToggleCheckbox = document.getElementById('theme-checkbox');
themeToggleCheckbox.checked = currentTheme === 'dark';

themeToggleCheckbox.addEventListener('change', function () {
    const selectedTheme = this.checked ? 'dark' : 'light'; // this binds to the DOM object themeToggleCheckbox
    sessionStorage.setItem('theme', selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
});
