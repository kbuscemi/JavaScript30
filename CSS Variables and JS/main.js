const inputs = document.querySelectorAll('.controls input'); //nodelist -- will use forEach method

function handleUpdate() {
    // console.log(this.value)
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
    // console.log(suffix);
    // have to include || '' because some attributes don't having sizing and if we don't include this it will append nothing
    // console.log(this.dataset) // dataset is an object that will contain all the data attributes of that particular object
    console.log(this.name);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));