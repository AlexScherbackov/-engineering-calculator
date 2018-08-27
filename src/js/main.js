// @include('globals.js')
// @include('functions.js')
// @include('eventEmmiter.js')
// @include('model.js')
// @include('modelCilender.js')
// @include('controller.js')
// @include('viewer.js')
// @include('viewerCilender.js')
// @include('controlCilender.js')

// 
const model = new modelCilender(NAME_STACK);
const viewer = new viewerCilender('#cylinder-capacity', '#calculation-result', model.getNames());
const control = new controlCilender(model, viewer);


