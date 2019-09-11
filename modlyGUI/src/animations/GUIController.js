import * as dat from 'dat.gui';

export default ({ gui, title }) => {
     var gui = new dat.GUI();
     var controls = function() {
     this.RotationSpeed = 0.005;
    }

     var title = new controls();
     gui.add(title, 'RotationSpeed', 0.005, 0.1);
     console.log(title.RotationSpeed)
}