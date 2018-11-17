<!--
===============================================================================
line 19 of StepsTile.js

 <img className="step-show-pic" src={props.image} alt={props.number} /> -->

<!-- this will come into play more with carrierwave -->
===============================================================================
<!--
# <i class="fab fa-rebel"></i>   ##### Rebel Alliance symbol
# <i class="fab fa-empire"></i>  ##### Imperial symbol
# <i class="fas fa-fire-extinguisher"></i>  ##### Fire extinguisher
-->


===========================================================================
<!-- class ProjectFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      description:"",
      photo_url:"",
      budget:"",
      errors: {}
    }
    this.validateEntry = this.validateEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postNewProject = this.postNewProject.bind(this);
  }

  validateEntry(name, fieldValue){
    if (fieldValue.trim() === '') {
      let newError = { [name]: `You must enter a ${name}`};
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState[name];
      this.setState({ errors: errorState });
      return true;
    }
  }

  handleChange(event){
    this.validateEntry(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  } -->

  <!-- handleSubmit(event){
    event.preventDefault();
    Object.keys(this.state).forEach(key => {
      if (key !="errors") {
        this.validateEntry(key, this.state[key])
      }
    })
    if (Object.keys(this.state.errors).length ==0) {
      let newProject = new FormData();
      newProject.append("name", this.state.name);
      newProject.append("description", this.state.description);
      newProject.append("photo_url", this.state.photo_url);
      newProject.append("budget", this.state.budget);
      this.postNewProject(newProject);
      this.handleClear();
    }
  } -->
