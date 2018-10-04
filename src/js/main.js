// @include('globals.js')
// @include('functions.js')
// @include('globalClasses/eventEmmiter.js')
// @include('globalClasses/model.js')
// @include('globalClasses/controller.js')
// @include('globalClasses/viewer.js')
// @include('subClasses/matematicViewer.js')
// @include('subClasses/mathModel.js')
// @include('subClasses/matematicControl.js')
//
const model = new mathModel(NAME_STACK);
const viewer = new matematicViewer('#matematical-calc', '#calculation-result', model.getNames());
const control = new matematicControl(model, viewer);




