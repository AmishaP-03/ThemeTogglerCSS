const currentTheme = sessionStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

const themeToggleCheckbox = document.getElementById('theme-checkbox');
themeToggleCheckbox.checked = currentTheme === 'dark';

const themeLabel = document.getElementById('theme-label');
setThemeLabel(currentTheme);

themeToggleCheckbox.addEventListener('change', function () {
    const selectedTheme = this.checked ? 'dark' : 'light'; // this binds to the DOM object themeToggleCheckbox, undefined when used in arrow functions.
    sessionStorage.setItem('theme', selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
    setThemeLabel(selectedTheme);
});

function setThemeLabel(theme) {
    themeLabel.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
}
