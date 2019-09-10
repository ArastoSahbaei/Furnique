import * as dat from 'dat.gui';

export default ({ guis }) => {
     var gui = new dat.GUI();
     var controls = function() {
     this.RotationSpeed = 0.005;
    }
     var title = new controls();
     gui.add(title, 'RotationSpeed', 0.005, 0.1);
    }
