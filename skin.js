// Garden Gnome Software - Skin
// Object2VR 4.0.1a/20869
// Filename: electric_vehicle_menu.ggsk
// Generated 2025-06-02T21:26:43

function object2vrSkin(player,base) {
	player.addVariable('vis_skin', 2, true, { ignoreInState: 0  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('num_buttons_left', 1, 0, { ignoreInState: 1  });
	player.addVariable('vis_controls_right', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_left', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_translations', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('image_hs_description', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popup_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_hs_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_video_youtube_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_controller', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_move_rotate_mode', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('width_controls_left', 1, 0, { ignoreInState: 0  });
	player.addVariable('width_controls_right', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('pos_share_buttons', 1, 0, { ignoreInState: 0  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_num_buttons_left = {};
		me._variable_num_buttons_left.ggCurrentLogicState = -1;
		me._variable_num_buttons_left.logicBlock = function() {
			var newConditionsTrue_num_buttons_left = [];
			var delta = 0;
			if (
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newConditionsTrue_num_buttons_left.push(0);
			}
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newConditionsTrue_num_buttons_left.push(1);
			}
			if (JSON.stringify(me._variable_num_buttons_left.ggConditionsTrue) != JSON.stringify(newConditionsTrue_num_buttons_left)) {
				me._variable_num_buttons_left.ggConditionsTrue = newConditionsTrue_num_buttons_left;
				if (me._variable_num_buttons_left.ggConditionsTrue.includes(0)) {
					delta += 1;
				}
				if (me._variable_num_buttons_left.ggConditionsTrue.includes(1)) {
					delta += 1;
				}
				player.setVariableValue('num_buttons_left', 0 + delta);
			}
		}
		me._variable_vis_controls_left = {};
		me._variable_vis_controls_left.ggCurrentLogicState = -1;
		me._variable_vis_controls_left.logicBlock = function() {
			var newLogicState_vis_controls_left;
			if (
				((player.getVariableValue('resp_phone') == true)) || 
				((player.getVariableValue('num_buttons_left') == Number("1")))
			)
			{
				newLogicState_vis_controls_left = 0;
			}
			else {
				newLogicState_vis_controls_left = -1;
			}
			if (me._variable_vis_controls_left.ggCurrentLogicState != newLogicState_vis_controls_left) {
				me._variable_vis_controls_left.ggCurrentLogicState = newLogicState_vis_controls_left;
				if (me._variable_vis_controls_left.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_controls_left', false);
				}
				else {
					player.setVariableValue('vis_controls_left', true);
				}
			}
		}
		me._variable_vis_video_hs_popup = {};
		me._variable_vis_video_hs_popup.ggCurrentLogicState = -1;
		me._variable_vis_video_hs_popup.logicBlock = function() {
			var newLogicState_vis_video_hs_popup;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicState_vis_video_hs_popup = 0;
			}
			else {
				newLogicState_vis_video_hs_popup = -1;
			}
			if (me._variable_vis_video_hs_popup.ggCurrentLogicState != newLogicState_vis_video_hs_popup) {
				me._variable_vis_video_hs_popup.ggCurrentLogicState = newLogicState_vis_video_hs_popup;
				if (me._variable_vis_video_hs_popup.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_video_hs_popup', true);
				}
				else {
					player.setVariableValue('vis_video_hs_popup', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._container_controls=document.createElement('div');
		el.ggId="container_controls";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_controls.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_controls.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_controls.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_controls.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_controls.style.transition='';
				if (me._container_controls.ggCurrentLogicStateVisible == 0) {
					me._container_controls.style.visibility=(Number(me._container_controls.style.opacity)>0||!me._container_controls.style.opacity)?'inherit':'hidden';
					me._container_controls.ggVisible=true;
				}
				else {
					me._container_controls.style.visibility="hidden";
					me._container_controls.ggVisible=false;
				}
			}
		}
		me._container_controls.logicBlock_visible();
		me._container_controls.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_right=document.createElement('div');
		el.ggId="controls_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px 0px 0px 18px;';
		hs+='bottom : 24px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_right.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_right_visibility=document.createElement('div');
		el.ggId="controls_right_visibility";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_right_visibility.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_right_visibility.ggUpdatePosition=function (useTransition) {
		}
		el=me._cr_fullscreen=document.createElement('div');
		el.ggId="cr_fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_fullscreen') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_fullscreen.style.transition='';
				if (me._cr_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._cr_fullscreen.style.visibility=(Number(me._cr_fullscreen.style.opacity)>0||!me._cr_fullscreen.style.opacity)?'inherit':'hidden';
					me._cr_fullscreen.ggVisible=true;
				}
				else {
					me._cr_fullscreen.style.visibility="hidden";
					me._cr_fullscreen.ggVisible=false;
				}
			}
		}
		me._cr_fullscreen.logicBlock_visible();
		me._cr_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._cr_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._cr_fs_exit=document.createElement('div');
		els=me._cr_fs_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW'+
			'5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjQ3LjY1IiB4Mj0iMzUuNTQiIHkxPSIxNi40NSIgeTI9IjI4LjQ2Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9'+
			'IjE2LjM1IiB4Mj0iMjguNDYiIHkxPSI0Ny41NSIgeTI9IjM1LjU0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._cr_fs_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_fs_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ4IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0ID'+
			'E2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHgxPSI0Ny42NSIgeDI9IjM1LjU0IiB5MT0iMTYuNDUiIHkyPSIyOC40NiIvPgogIDxwb2x5bGluZSBwb2ludHM9IjE2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9r'+
			'ZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHgxPSIxNi4zNSIgeDI9IjI4LjQ2IiB5MT0iNDcuNTUiIHkyPSIzNS41NCIvPgogPC9nPgo8L3N2Zz4K';
		me._cr_fs_exit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_fs_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_fs_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_fs_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_fs_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_fs_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_fs_exit.style.transition='';
				if (me._cr_fs_exit.ggCurrentLogicStateVisible == 0) {
					me._cr_fs_exit.style.visibility=(Number(me._cr_fs_exit.style.opacity)>0||!me._cr_fs_exit.style.opacity)?'inherit':'hidden';
					me._cr_fs_exit.ggVisible=true;
				}
				else {
					me._cr_fs_exit.style.visibility="hidden";
					me._cr_fs_exit.ggVisible=false;
				}
			}
		}
		me._cr_fs_exit.logicBlock_visible();
		me._cr_fs_exit.onmouseenter=function (e) {
			me._cr_fs_exit__img.style.visibility='hidden';
			me._cr_fs_exit__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_fs_exit']=true;
		}
		me._cr_fs_exit.onmouseleave=function (e) {
			me._cr_fs_exit__img.style.visibility='inherit';
			me._cr_fs_exit__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_fs_exit']=false;
		}
		me._cr_fs_exit.ggUpdatePosition=function (useTransition) {
		}
		me._cr_fullscreen.appendChild(me._cr_fs_exit);
		el=me._cr_fs_enter=document.createElement('div');
		els=me._cr_fs_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHN0eWxlPSJmaW'+
			'xsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjM1Ljg5IiB4Mj0iNDgiIHkxPSIyOCIgeTI9IjE2Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjI4LjExIiB4Mj0iMTYiIHkxPSIzNiIgeTI9IjQ4Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._cr_fs_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_fs_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHgxPSIzNS44OSIgeDI9IjQ4IiB5MT0iMjgiIHkyPSIxNiIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHgxPSIyOC4xMSIgeDI9IjE2IiB5MT0iMzYiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._cr_fs_enter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_fs_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_fs_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_fs_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_fs_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_fs_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_fs_enter.style.transition='';
				if (me._cr_fs_enter.ggCurrentLogicStateVisible == 0) {
					me._cr_fs_enter.style.visibility="hidden";
					me._cr_fs_enter.ggVisible=false;
				}
				else {
					me._cr_fs_enter.style.visibility=(Number(me._cr_fs_enter.style.opacity)>0||!me._cr_fs_enter.style.opacity)?'inherit':'hidden';
					me._cr_fs_enter.ggVisible=true;
				}
			}
		}
		me._cr_fs_enter.logicBlock_visible();
		me._cr_fs_enter.onmouseenter=function (e) {
			me._cr_fs_enter__img.style.visibility='hidden';
			me._cr_fs_enter__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_fs_enter']=true;
		}
		me._cr_fs_enter.onmouseleave=function (e) {
			me._cr_fs_enter__img.style.visibility='inherit';
			me._cr_fs_enter__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_fs_enter']=false;
		}
		me._cr_fs_enter.ggUpdatePosition=function (useTransition) {
		}
		me._cr_fullscreen.appendChild(me._cr_fs_enter);
		me._controls_right_visibility.appendChild(me._cr_fullscreen);
		el=me._cr_translations=document.createElement('div');
		els=me._cr_translations__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOmJldmVsO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8Zz4KICAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Zz4KICAgPHBvbHlsaW5lIGNsYXNzPSJzdDEiIHBvaW50cz0iMzEuMSw0OCA0MC42LDIzLjggNDkuOCw0OCAgICIvPgogICA8bGlu'+
			'ZSBjbGFzcz0ic3QxIiB4MT0iMzQuOCIgeDI9IjQ2LjMiIHkxPSIzOC43IiB5Mj0iMzguNyIvPgogICA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTQuMiIgeDI9IjMzLjYiIHkxPSIyMC42IiB5Mj0iMjAuNiIvPgogICA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMjMuOSIgeDI9IjIzLjkiIHkxPSIxNiIgeTI9IjIwLjYiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI4LjgsMjAuNmMwLDAsMC4zLDMuOS0wLjgsNy4yYy0xLjksNi04LjEsMTAuMi0xMywxMS40Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOS4yLDI0LjRjMCwxLjIsMCw0LDAuOCw2LjVjMS40LDQuNSw1LjMsOCw5LjEsOS45Yz'+
			'EuMywwLjcsMi42LDEuMSwzLjgsMS40Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9ImJhcnJhIi8+Cjwvc3ZnPgo=';
		me._cr_translations__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_translations__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOmJldmVsO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMyIiBjeT0iMzIiIHI9IjI3Ii8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPGc+CiAgIDxyZWN0IGNsYXNzPSJzdDEiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogIDwvZz4KIDwvZz4K'+
			'IDxnIGlkPSJpY29uYSI+CiAgPGc+CiAgIDxwb2x5bGluZSBjbGFzcz0ic3QyIiBwb2ludHM9IjMxLjEsNDggNDAuNiwyMy44IDQ5LjgsNDggICAiLz4KICAgPGxpbmUgY2xhc3M9InN0MiIgeDE9IjM0LjgiIHgyPSI0Ni4zIiB5MT0iMzguNyIgeTI9IjM4LjciLz4KICAgPGxpbmUgY2xhc3M9InN0MiIgeDE9IjE0LjIiIHgyPSIzMy42IiB5MT0iMjAuNiIgeTI9IjIwLjYiLz4KICAgPGxpbmUgY2xhc3M9InN0MiIgeDE9IjIzLjkiIHgyPSIyMy45IiB5MT0iMTYiIHkyPSIyMC42Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yOC44LDIwLjZjMCwwLDAuMywzLjktMC44LDcuMmMtMS45LDYtOC'+
			'4xLDEwLjItMTMsMTEuNCIvPgogICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTkuMiwyNC40YzAsMS4yLDAsNCwwLjgsNi41YzEuNCw0LjUsNS4zLDgsOS4xLDkuOWMxLjMsMC43LDIuNiwxLjEsMy44LDEuNCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJiYXJyYSIvPgo8L3N2Zz4K';
		me._cr_translations__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_translations";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_translations.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_translations.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_translations.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_translations.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_translations.style.transition='';
				if (me._cr_translations.ggCurrentLogicStateVisible == 0) {
					me._cr_translations.style.visibility=(Number(me._cr_translations.style.opacity)>0||!me._cr_translations.style.opacity)?'inherit':'hidden';
					me._cr_translations.ggVisible=true;
				}
				else {
					me._cr_translations.style.visibility="hidden";
					me._cr_translations.ggVisible=false;
				}
			}
		}
		me._cr_translations.logicBlock_visible();
		me._cr_translations.onclick=function (e) {
			player.setVariableValue('vis_translations', !player.getVariableValue('vis_translations'));
		}
		me._cr_translations.onmouseenter=function (e) {
			me._cr_translations__img.style.visibility='hidden';
			me._cr_translations__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_translations']=true;
		}
		me._cr_translations.onmouseleave=function (e) {
			me._cr_translations__img.style.visibility='inherit';
			me._cr_translations__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_translations']=false;
		}
		me._cr_translations.ggUpdatePosition=function (useTransition) {
		}
		me._controls_right_visibility.appendChild(me._cr_translations);
		el=me._cr_move_rotate_mode=document.createElement('div');
		el.ggId="cr_move_rotate_mode";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_move_rotate_mode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_move_rotate_mode.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_move_rotate_mode') == true)) && 
				((player.getHasZoom() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_move_rotate_mode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_move_rotate_mode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_move_rotate_mode.style.transition='';
				if (me._cr_move_rotate_mode.ggCurrentLogicStateVisible == 0) {
					me._cr_move_rotate_mode.style.visibility=(Number(me._cr_move_rotate_mode.style.opacity)>0||!me._cr_move_rotate_mode.style.opacity)?'inherit':'hidden';
					me._cr_move_rotate_mode.ggVisible=true;
				}
				else {
					me._cr_move_rotate_mode.style.visibility="hidden";
					me._cr_move_rotate_mode.ggVisible=false;
				}
			}
		}
		me._cr_move_rotate_mode.logicBlock_visible();
		me._cr_move_rotate_mode.onclick=function (e) {
			player.changeViewMode(2);
		}
		me._cr_move_rotate_mode.ggUpdatePosition=function (useTransition) {
		}
		el=me._cr_rotate_mode=document.createElement('div');
		els=me._cr_rotate_mode__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxnPgogICA8cmVjdCBjbGFzcz0ic3QwIiBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00My42LDQzYy0yLjksMy4xLTcsNS0xMS42LDVjLTguOCwwLTE2LTcuMi0xNi0xNnM3LjItMTYsMTYtMTZzMTYsNy4yLDE2LDE2djIu'+
			'MiIvPgogIDxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjMyIiBjeT0iMzIiIHI9IjEuMyIvPgogIDxnPgogICA8Zz4KICAgIDxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjUyLjQsMjkuOCA0OCwzNC4yIDQ4LDM0LjIgNDMuNiwyOS44ICAgICIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgaWQ9ImJhcnJhIi8+Cjwvc3ZnPgo=';
		me._cr_rotate_mode__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_rotate_mode__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8Zz4KICAgPHJlY3QgY2xhc3M9InN0MSIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0'+
			'aCBjbGFzcz0ic3QyIiBkPSJNNDMuNiw0M2MtMi45LDMuMS03LDUtMTEuNiw1Yy04LjgsMC0xNi03LjItMTYtMTZzNy4yLTE2LDE2LTE2czE2LDcuMiwxNiwxNnYyLjIiLz4KICA8Y2lyY2xlIGNsYXNzPSJzdDIiIGN4PSIzMiIgY3k9IjMyIiByPSIxLjMiLz4KICA8Zz4KICAgPGc+CiAgICA8cG9seWxpbmUgY2xhc3M9InN0MiIgcG9pbnRzPSI1Mi40LDI5LjggNDgsMzQuMiA0OCwzNC4yIDQzLjYsMjkuOCAgICAiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJiYXJyYSIvPgo8L3N2Zz4K';
		me._cr_rotate_mode__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_rotate_mode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_rotate_mode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_rotate_mode.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_rotate_mode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_rotate_mode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_rotate_mode.style.transition='';
				if (me._cr_rotate_mode.ggCurrentLogicStateVisible == 0) {
					me._cr_rotate_mode.style.visibility=(Number(me._cr_rotate_mode.style.opacity)>0||!me._cr_rotate_mode.style.opacity)?'inherit':'hidden';
					me._cr_rotate_mode.ggVisible=true;
				}
				else {
					me._cr_rotate_mode.style.visibility=(Number(me._cr_rotate_mode.style.opacity)>0||!me._cr_rotate_mode.style.opacity)?'inherit':'hidden';
					me._cr_rotate_mode.ggVisible=true;
				}
			}
		}
		me._cr_rotate_mode.logicBlock_visible();
		me._cr_rotate_mode.onclick=function (e) {
			player.startAutorotate(0.2);
		}
		me._cr_rotate_mode.onmouseenter=function (e) {
			me._cr_rotate_mode__img.style.visibility='hidden';
			me._cr_rotate_mode__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_rotate_mode']=true;
		}
		me._cr_rotate_mode.onmouseleave=function (e) {
			me._cr_rotate_mode__img.style.visibility='inherit';
			me._cr_rotate_mode__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_rotate_mode']=false;
		}
		me._cr_rotate_mode.ggUpdatePosition=function (useTransition) {
		}
		me._cr_move_rotate_mode.appendChild(me._cr_rotate_mode);
		el=me._cr_move_mode=document.createElement('div');
		els=me._cr_move_mode__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxnPgogICA8cmVjdCBjbGFzcz0ic3QwIiBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNy4yLDQ1LjhsLTEwLjEtOS41Yy0xLjMtMS4xLTEuNi0zLjEtMC41LTQuNGwwLDBjMS4xLTEuNCwzLTEuNiw0LjQtMC41bDIuMiwy'+
			'LjJ2LTkuMWMwLTEuNywxLjQtMy4xLDMuMS0zLjEgICBsMCwwYzEuNywwLDMuMSwxLjQsMy4xLDMuMXY5LjFWMTkuMWMwLTEuNywxLjQtMy4xLDMuMS0zLjFsMCwwYzEuNywwLDMuMSwxLjQsMy4xLDMuMXYxNC40VjE5LjFjMC0xLjcsMS40LTMuMSwzLjEtMy4xbDAsMCAgIGMxLjcsMCwzLjEsMS40LDMuMSwzLjF2MTQuNHYtNy4zYzAtMS43LDEuNC0zLjEsMy4xLTMuMWwwLDBjMS43LDAsMy4xLDEuNCwzLjEsMy4xdjcuM3YxLjljMCw3LTUuNiwxMi42LTEyLjQsMTIuNiAgIEMzMyw0OCwyOS4yLDQ3LjIsMjcuMiw0NS44TDI3LjIsNDUuOHoiLz4KIDwvZz4KIDxnIGlkPSJiYXJyYSIvPgo8L3N2Zz'+
			'4K';
		me._cr_move_mode__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_move_mode__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8Zz4KICAgPHJlY3QgY2xhc3M9InN0MSIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0'+
			'aCBjbGFzcz0ic3QyIiBkPSJNMjcuMiw0NS44bC0xMC4xLTkuNWMtMS4zLTEuMS0xLjYtMy4xLTAuNS00LjRsMCwwYzEuMS0xLjQsMy0xLjYsNC40LTAuNWwyLjIsMi4ydi05LjFjMC0xLjcsMS40LTMuMSwzLjEtMy4xICAgbDAsMGMxLjcsMCwzLjEsMS40LDMuMSwzLjF2OS4xVjE5LjFjMC0xLjcsMS40LTMuMSwzLjEtMy4xbDAsMGMxLjcsMCwzLjEsMS40LDMuMSwzLjF2MTQuNFYxOS4xYzAtMS43LDEuNC0zLjEsMy4xLTMuMWwwLDAgICBjMS43LDAsMy4xLDEuNCwzLjEsMy4xdjE0LjR2LTcuM2MwLTEuNywxLjQtMy4xLDMuMS0zLjFsMCwwYzEuNywwLDMuMSwxLjQsMy4xLDMuMXY3LjN2MS45Yz'+
			'AsNy01LjYsMTIuNi0xMi40LDEyLjYgICBDMzMsNDgsMjkuMiw0Ny4yLDI3LjIsNDUuOEwyNy4yLDQ1Ljh6Ii8+CiA8L2c+CiA8ZyBpZD0iYmFycmEiLz4KPC9zdmc+Cg==';
		me._cr_move_mode__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_move_mode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_move_mode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_move_mode.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_move_mode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_move_mode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_move_mode.style.transition='';
				if (me._cr_move_mode.ggCurrentLogicStateVisible == 0) {
					me._cr_move_mode.style.visibility=(Number(me._cr_move_mode.style.opacity)>0||!me._cr_move_mode.style.opacity)?'inherit':'hidden';
					me._cr_move_mode.ggVisible=true;
				}
				else {
					me._cr_move_mode.style.visibility="hidden";
					me._cr_move_mode.ggVisible=false;
				}
			}
		}
		me._cr_move_mode.logicBlock_visible();
		me._cr_move_mode.onclick=function (e) {
			player.stopAutorotate();
		}
		me._cr_move_mode.onmouseenter=function (e) {
			me._cr_move_mode__img.style.visibility='hidden';
			me._cr_move_mode__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_move_mode']=true;
		}
		me._cr_move_mode.onmouseleave=function (e) {
			me._cr_move_mode__img.style.visibility='inherit';
			me._cr_move_mode__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_move_mode']=false;
		}
		me._cr_move_mode.ggUpdatePosition=function (useTransition) {
		}
		me._cr_move_rotate_mode.appendChild(me._cr_move_mode);
		me._controls_right_visibility.appendChild(me._cr_move_rotate_mode);
		el=me._cr_reset_zoom=document.createElement('div');
		el.ggId="cr_reset_zoom";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_reset_zoom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_reset_zoom.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasZoom() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_reset_zoom.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_reset_zoom.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_reset_zoom.style.transition='';
				if (me._cr_reset_zoom.ggCurrentLogicStateVisible == 0) {
					me._cr_reset_zoom.style.visibility=(Number(me._cr_reset_zoom.style.opacity)>0||!me._cr_reset_zoom.style.opacity)?'inherit':'hidden';
					me._cr_reset_zoom.ggVisible=true;
				}
				else {
					me._cr_reset_zoom.style.visibility="hidden";
					me._cr_reset_zoom.ggVisible=false;
				}
			}
		}
		me._cr_reset_zoom.logicBlock_visible();
		me._cr_reset_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._cr_reset_zoom_on=document.createElement('div');
		els=me._cr_reset_zoom_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxnPgogICA8cmVjdCBjbGFzcz0ic3QwIiBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxnPgogICA8Zz4KICAgIDxsaW5lIGNsYXNzPSJzdDEiIHgxPSIzOS42IiB4Mj0iNDgiIHkxPSIzOS44IiB5Mj0iNDgiLz4KICAgPC9nPgogIDwvZz4KICA8cGF0aCBjbGFz'+
			'cz0ic3QxIiBkPSJNMTYsMjguMWMwLTEuMywwLjItMi43LDAuNy00YzIuMi02LjMsOS05LjYsMTUuMy03LjRzOS42LDksNy40LDE1LjNzLTksOS42LTE1LjMsNy40ICAgYy0yLjctMC45LTQuOC0yLjctNi4yLTQuOSIvPgogIDxnPgogICA8Zz4KICAgIDxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjIxLjgsMjQuMiAxNiwyOC4xIDE2LDI4LjEgMTIuMSwyMi4zICAgICIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgaWQ9ImJhcnJhIi8+Cjwvc3ZnPgo=';
		me._cr_reset_zoom_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_reset_zoom_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8Zz4KICAgPHJlY3QgY2xhc3M9InN0MSIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Zz4K'+
			'ICAgPGc+CiAgICA8bGluZSBjbGFzcz0ic3QyIiB4MT0iMzkuNiIgeDI9IjQ4IiB5MT0iMzkuOCIgeTI9IjQ4Ii8+CiAgIDwvZz4KICA8L2c+CiAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTE2LDI4LjFjMC0xLjMsMC4yLTIuNywwLjctNGMyLjItNi4zLDktOS42LDE1LjMtNy40czkuNiw5LDcuNCwxNS4zcy05LDkuNi0xNS4zLDcuNCAgIGMtMi43LTAuOS00LjgtMi43LTYuMi00LjkiLz4KICA8Zz4KICAgPGc+CiAgICA8cG9seWxpbmUgY2xhc3M9InN0MiIgcG9pbnRzPSIyMS44LDI0LjIgMTYsMjguMSAxNiwyOC4xIDEyLjEsMjIuMyAgICAiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPS'+
			'JiYXJyYSIvPgo8L3N2Zz4K';
		me._cr_reset_zoom_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_reset_zoom_on";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_reset_zoom_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_reset_zoom_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getZoom() > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_reset_zoom_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_reset_zoom_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_reset_zoom_on.style.transition='';
				if (me._cr_reset_zoom_on.ggCurrentLogicStateVisible == 0) {
					me._cr_reset_zoom_on.style.visibility=(Number(me._cr_reset_zoom_on.style.opacity)>0||!me._cr_reset_zoom_on.style.opacity)?'inherit':'hidden';
					me._cr_reset_zoom_on.ggVisible=true;
				}
				else {
					me._cr_reset_zoom_on.style.visibility="hidden";
					me._cr_reset_zoom_on.ggVisible=false;
				}
			}
		}
		me._cr_reset_zoom_on.logicBlock_visible();
		me._cr_reset_zoom_on.onclick=function (e) {
			player.setZoom(1);
		}
		me._cr_reset_zoom_on.onmouseenter=function (e) {
			me._cr_reset_zoom_on__img.style.visibility='hidden';
			me._cr_reset_zoom_on__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_reset_zoom_on']=true;
		}
		me._cr_reset_zoom_on.onmouseleave=function (e) {
			me._cr_reset_zoom_on__img.style.visibility='inherit';
			me._cr_reset_zoom_on__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_reset_zoom_on']=false;
		}
		me._cr_reset_zoom_on.ggUpdatePosition=function (useTransition) {
		}
		me._cr_reset_zoom.appendChild(me._cr_reset_zoom_on);
		el=me._cr_reset_zoom_off=document.createElement('div');
		els=me._cr_reset_zoom_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjcuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxnPgogICA8cmVjdCBjbGFzcz0ic3QwIiBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxnPgogICA8Zz4KICAgIDxsaW5lIGNsYXNzPSJzdDEiIHgxPSIzOS42IiB4Mj0iNDgiIHkxPSIzOS44IiB5Mj0iNDgiLz4KICAgPC9nPgogIDwvZz4KICA8cGF0aCBjbGFz'+
			'cz0ic3QxIiBkPSJNMTYsMjguMWMwLTEuMywwLjItMi43LDAuNy00YzIuMi02LjMsOS05LjYsMTUuMy03LjRzOS42LDksNy40LDE1LjNzLTksOS42LTE1LjMsNy40ICAgYy0yLjctMC45LTQuOC0yLjctNi4yLTQuOSIvPgogIDxnPgogICA8Zz4KICAgIDxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjIxLjgsMjQuMiAxNiwyOC4xIDE2LDI4LjEgMTIuMSwyMi4zICAgICIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgaWQ9ImJhcnJhIi8+Cjwvc3ZnPgo=';
		me._cr_reset_zoom_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cr_reset_zoom_off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_reset_zoom_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_reset_zoom_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getZoom() > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_reset_zoom_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_reset_zoom_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_reset_zoom_off.style.transition='';
				if (me._cr_reset_zoom_off.ggCurrentLogicStateVisible == 0) {
					me._cr_reset_zoom_off.style.visibility="hidden";
					me._cr_reset_zoom_off.ggVisible=false;
				}
				else {
					me._cr_reset_zoom_off.style.visibility=(Number(me._cr_reset_zoom_off.style.opacity)>0||!me._cr_reset_zoom_off.style.opacity)?'inherit':'hidden';
					me._cr_reset_zoom_off.ggVisible=true;
				}
			}
		}
		me._cr_reset_zoom_off.logicBlock_visible();
		me._cr_reset_zoom_off.ggUpdatePosition=function (useTransition) {
		}
		me._cr_reset_zoom.appendChild(me._cr_reset_zoom_off);
		me._controls_right_visibility.appendChild(me._cr_reset_zoom);
		me._controls_right.appendChild(me._controls_right_visibility);
		el=me._toggle_controls_right=document.createElement('div');
		els=me._toggle_controls_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTQgMzEuNyAzMS45OSA0NS42MyAzMS45OSA0NS42MyAxOC4wNiAzMS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIC'+
			'A8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSIxNiIgeDI9IjQ4IiB5MT0iMTguMzciIHkyPSIxOC4zNyIvPgogPC9nPgo8L3N2Zz4K';
		me._toggle_controls_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_controls_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ1Ljk0IDMxLjcgMzEuOTkgNDUuNjMgMzEuOTkgNDUuNjMgMTguMD'+
			'YgMzEuNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTYiIHgyPSI0OCIgeTE9IjE4LjM3IiB5Mj0iMTguMzciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_controls_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_controls_right";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._toggle_controls_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls_right.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_controls_right') == false))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._toggle_controls_right.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._toggle_controls_right.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._toggle_controls_right.style.transition='transform 1000ms ease 0ms';
				if (me._toggle_controls_right.ggCurrentLogicStateAngle == 0) {
					me._toggle_controls_right.ggParameter.a = 90;
					me._toggle_controls_right.style.transform=parameterToTransform(me._toggle_controls_right.ggParameter);
				}
				else {
					me._toggle_controls_right.ggParameter.a = -90;
					me._toggle_controls_right.style.transform=parameterToTransform(me._toggle_controls_right.ggParameter);
				}
			}
		}
		me._toggle_controls_right.logicBlock_angle();
		me._toggle_controls_right.onclick=function (e) {
			player.setVariableValue('vis_controls_right', !player.getVariableValue('vis_controls_right'));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_controls_left', false);
			}
		}
		me._toggle_controls_right.onmouseenter=function (e) {
			me._toggle_controls_right__img.style.visibility='hidden';
			me._toggle_controls_right__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_controls_right']=true;
		}
		me._toggle_controls_right.onmouseleave=function (e) {
			me._toggle_controls_right__img.style.visibility='inherit';
			me._toggle_controls_right__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_controls_right']=false;
		}
		me._toggle_controls_right.ggUpdatePosition=function (useTransition) {
		}
		me._controls_right.appendChild(me._toggle_controls_right);
		el=me._controls_right_safe_area=document.createElement('div');
		el.ggId="controls_right_safe_area";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : -150px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_right_safe_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_right_safe_area.ggUpdatePosition=function (useTransition) {
		}
		me._controls_right.appendChild(me._controls_right_safe_area);
		me._container_controls.appendChild(me._controls_right);
		el=me._container_controls_left=document.createElement('div');
		el.ggId="container_controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 24px;';
		hs+='height : 36px;';
		hs+='left : '+player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))+'px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_controls_left.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_controls_left') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('width_controls_left') > Number("0")))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_controls_left.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_controls_left.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_controls_left.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me._container_controls_left.ggCurrentLogicStatePosition == 0) {
					me._container_controls_left.style.left='29px';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 1) {
					me._container_controls_left.style.left='calc(25% + 16px)';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 2) {
					me._container_controls_left.style.left='236px';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 3) {
					me._container_controls_left.style.left=''+player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))+'px';
					me._container_controls_left.style.bottom='24px';
				}
				else {
					me._container_controls_left.style.left=''+player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))+'px';
					me._container_controls_left.style.bottom='24px';
				}
			}
		}
		me._container_controls_left.logicBlock_position();
		me._container_controls_left.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('num_buttons_left') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_controls_left.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_controls_left.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_controls_left.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me._container_controls_left.ggCurrentLogicStateVisible == 0) {
					me._container_controls_left.style.visibility="hidden";
					me._container_controls_left.ggVisible=false;
				}
				else {
					me._container_controls_left.style.visibility=(Number(me._container_controls_left.style.opacity)>0||!me._container_controls_left.style.opacity)?'inherit':'hidden';
					me._container_controls_left.ggVisible=true;
				}
			}
		}
		me._container_controls_left.logicBlock_visible();
		me._container_controls_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_left=document.createElement('div');
		el.ggId="controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 18px 18px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_left_visibility=document.createElement('div');
		el.ggId="controls_left_visibility";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left_visibility.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_left_visibility.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_info=document.createElement('div');
		els=me._cl_info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIyMC44NCIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4Ii8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2'+
			'U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMzIiIHgyPSIzMiIgeTE9IjMxLjUiIHkyPSI0Ny41Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._cl_info__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cl_info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMjAuODQiIHI9IjEuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2'+
			'tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjMyIiB4Mj0iMzIiIHkxPSIzMS41IiB5Mj0iNDcuNSIvPgogPC9nPgo8L3N2Zz4K';
		me._cl_info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cl_info";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_info.style.transition='';
				if (me._cl_info.ggCurrentLogicStateVisible == 0) {
					me._cl_info.style.visibility="hidden";
					me._cl_info.ggVisible=false;
				}
				else {
					me._cl_info.style.visibility=(Number(me._cl_info.style.opacity)>0||!me._cl_info.style.opacity)?'inherit':'hidden';
					me._cl_info.ggVisible=true;
				}
			}
		}
		me._cl_info.logicBlock_visible();
		me._cl_info.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', !player.getVariableValue('vis_info'));
			}
			if (
				(
					((player.getVariableValue('num_buttons_left') == Number("1"))) && 
					((player.getVariableValue('vis_info') == false))
				)
			) {
				player.setVariableValue('vis_controls_left', false);
			}
			player.setVariableValue('vis_share', false);
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_info') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_info') == false))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', !player.getVariableValue('vis_phone_info'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_title_phone.ggUpdateText();
				me._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_text_phone.ggUpdateText();
				me._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
		}
		me._cl_info.onmouseenter=function (e) {
			me._cl_info__img.style.visibility='hidden';
			me._cl_info__imgo.style.visibility='inherit';
			me.elementMouseOver['cl_info']=true;
		}
		me._cl_info.onmouseleave=function (e) {
			me._cl_info__img.style.visibility='inherit';
			me._cl_info__imgo.style.visibility='hidden';
			me.elementMouseOver['cl_info']=false;
		}
		me._cl_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_info_active=document.createElement('div');
		els=me._cl_info_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMjAuODQiIHI9IjEuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2'+
			'tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjMyIiB4Mj0iMzIiIHkxPSIzMS41IiB5Mj0iNDcuNSIvPgogPC9nPgo8L3N2Zz4K';
		me._cl_info_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cl_info_active";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_info_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_info_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true)) || 
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_info_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_info_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_info_active.style.transition='';
				if (me._cl_info_active.ggCurrentLogicStateVisible == 0) {
					me._cl_info_active.style.visibility=(Number(me._cl_info_active.style.opacity)>0||!me._cl_info_active.style.opacity)?'inherit':'hidden';
					me._cl_info_active.ggVisible=true;
				}
				else {
					me._cl_info_active.style.visibility="hidden";
					me._cl_info_active.ggVisible=false;
				}
			}
		}
		me._cl_info_active.logicBlock_visible();
		me._cl_info_active.ggUpdatePosition=function (useTransition) {
		}
		me._cl_info.appendChild(me._cl_info_active);
		me._controls_left_visibility.appendChild(me._cl_info);
		el=me._cl_share=document.createElement('div');
		els=me._cl_share__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjMuMTEiIHgyPSI0MS4yNSIgeTE9IjMzLjUzIiB5Mj0iNDQuMDEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0MS4yNSIgeDI9IjIyLjc2IiB5MT0iMjAiIHkyPSIzMC42NyIvPgogIDxjaXJjbGUgY3g9IjQzLjU1IiBjeT0iMTguNjciIHI9IjIuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxjaXJjbGUgY3g9IjIwLjQ1IiBjeT0iMzIiIHI9IjIuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxjaXJj'+
			'bGUgY3g9IjQzLjU1IiBjeT0iNDUuMzMiIHI9IjIuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogPC9nPgo8L3N2Zz4K';
		me._cl_share__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cl_share__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIzLjExIiB4Mj0iNDEuMjUiIHkxPSIzMy41MyIgeTI9IjQ0LjAxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDEuMjUiIHgyPSIyMi43NiIgeTE9IjIwIiB5Mj0iMzAuNjciLz4KICA8Y2lyY2xlIGN4PSI0My41NSIgY3k9IjE4LjY3IiByPSIyLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0'+
			'cm9rZS1vcGFjaXR5OjEiLz4KICA8Y2lyY2xlIGN4PSIyMC40NSIgY3k9IjMyIiByPSIyLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8Y2lyY2xlIGN4PSI0My41NSIgY3k9IjQ1LjMzIiByPSIyLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_share__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cl_share";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_share.style.transition='';
				if (me._cl_share.ggCurrentLogicStateVisible == 0) {
					me._cl_share.style.visibility=(Number(me._cl_share.style.opacity)>0||!me._cl_share.style.opacity)?'inherit':'hidden';
					me._cl_share.ggVisible=true;
				}
				else {
					me._cl_share.style.visibility="hidden";
					me._cl_share.ggVisible=false;
				}
			}
		}
		me._cl_share.logicBlock_visible();
		me._cl_share.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
if (navigator.canShare) {
  player.setVariableValue('share_api', navigator.canShare({ url: text }) && player.getIsMobile());
  player.setVariableValue('share_url', text);
}
			if (
				(
					((player.getVariableValue('share_api') == true))
				)
			) {
				let shareUrl = player.getVariableValue('share_url');
navigator.share({ url: shareUrl });
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_share', !player.getVariableValue('vis_share'));
			}
			if (
				(
					((player.getVariableValue('num_buttons_left') == Number("1"))) && 
					((player.getVariableValue('vis_share') == false))
				)
			) {
				player.setVariableValue('vis_controls_left', false);
			}
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_image_hs_popup_full', false);
			player.setVariableValue('vis_video_hs_popup', false);
			player.setVariableValue('vis_pdf_hs_popup', false);
			player.setVariableValue('vis_url_hs_popup', false);
			player.setVariableValue('vis_phone_popup', false);
		}
		me._cl_share.onmouseenter=function (e) {
			me._cl_share__img.style.visibility='hidden';
			me._cl_share__imgo.style.visibility='inherit';
			me.elementMouseOver['cl_share']=true;
		}
		me._cl_share.onmouseleave=function (e) {
			me._cl_share__img.style.visibility='inherit';
			me._cl_share__imgo.style.visibility='hidden';
			me.elementMouseOver['cl_share']=false;
		}
		me._cl_share.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_share_active=document.createElement('div');
		els=me._cl_share_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjIzLjExIiB4Mj0iNDEuMjUiIHkxPSIzMy41MyIgeTI9IjQ0LjAxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iNDEuMjUiIHgyPSIyMi43NiIgeTE9IjIwIiB5Mj0iMzAuNjciLz4KICA8Y2lyY2xlIGN4PSI0My41NSIgY3k9IjE4LjY3IiByPSIyLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KICA8Y2lyY2xlIGN4PSIyMC40NSIgY3k9IjMyIiByPSIyLjY3'+
			'IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KICA8Y2lyY2xlIGN4PSI0My41NSIgY3k9IjQ1LjMzIiByPSIyLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_share_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cl_share_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_share_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_share_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_share_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_share_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_share_active.style.transition='';
				if (me._cl_share_active.ggCurrentLogicStateVisible == 0) {
					me._cl_share_active.style.visibility=(Number(me._cl_share_active.style.opacity)>0||!me._cl_share_active.style.opacity)?'inherit':'hidden';
					me._cl_share_active.ggVisible=true;
				}
				else {
					me._cl_share_active.style.visibility="hidden";
					me._cl_share_active.ggVisible=false;
				}
			}
		}
		me._cl_share_active.logicBlock_visible();
		me._cl_share_active.ggUpdatePosition=function (useTransition) {
		}
		me._cl_share.appendChild(me._cl_share_active);
		me._controls_left_visibility.appendChild(me._cl_share);
		me._controls_left.appendChild(me._controls_left_visibility);
		el=me._toggle_controls_left=document.createElement('div');
		els=me._toggle_controls_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTQgMzEuNyAzMS45OSA0NS42MyAzMS45OSA0NS42MyAxOC4wNiAzMS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIC'+
			'A8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSIxNiIgeDI9IjQ4IiB5MT0iMTguMzciIHkyPSIxOC4zNyIvPgogPC9nPgo8L3N2Zz4K';
		me._toggle_controls_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_controls_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ1Ljk0IDMxLjcgMzEuOTkgNDUuNjMgMzEuOTkgNDUuNjMgMTguMD'+
			'YgMzEuNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTYiIHgyPSI0OCIgeTE9IjE4LjM3IiB5Mj0iMTguMzciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_controls_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_controls_left";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._toggle_controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls_left.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_controls_left') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._toggle_controls_left.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._toggle_controls_left.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._toggle_controls_left.style.transition='transform 1000ms ease 0ms';
				if (me._toggle_controls_left.ggCurrentLogicStateAngle == 0) {
					me._toggle_controls_left.ggParameter.a = 90;
					me._toggle_controls_left.style.transform=parameterToTransform(me._toggle_controls_left.ggParameter);
				}
				else {
					me._toggle_controls_left.ggParameter.a = -90;
					me._toggle_controls_left.style.transform=parameterToTransform(me._toggle_controls_left.ggParameter);
				}
			}
		}
		me._toggle_controls_left.logicBlock_angle();
		me._toggle_controls_left.onclick=function (e) {
			player.setVariableValue('vis_controls_left', !player.getVariableValue('vis_controls_left'));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_controls_right', false);
			}
			if (
				(
					((player.getVariableValue('num_buttons_left') == Number("1"))) && 
					((player._(me.ggUserdata.description) != "")) && 
					((player.getVariableValue('resp_phone') == false)) && 
					((player.getVariableValue('vis_controls_left') == true))
				)
			) {
				player.setVariableValue('vis_info', true);
			}
			if (
				(
					((player.getVariableValue('vis_controls_left') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('num_buttons_left') == Number("1"))) && 
					((player.getVariableValue('opt_share') == true)) && 
					((player.getVariableValue('resp_phone') == false)) && 
					((player.getVariableValue('vis_controls_left') == true))
				)
			) {
				player.setVariableValue('vis_share', true);
			}
			if (
				(
					((player.getVariableValue('vis_controls_left') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
		}
		me._toggle_controls_left.onmouseenter=function (e) {
			me._toggle_controls_left__img.style.visibility='hidden';
			me._toggle_controls_left__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_controls_left']=true;
		}
		me._toggle_controls_left.onmouseleave=function (e) {
			me._toggle_controls_left__img.style.visibility='inherit';
			me._toggle_controls_left__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_controls_left']=false;
		}
		me._toggle_controls_left.ggUpdatePosition=function (useTransition) {
		}
		me._controls_left.appendChild(me._toggle_controls_left);
		me._container_controls_left.appendChild(me._controls_left);
		me._container_controls.appendChild(me._container_controls_left);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((122px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 122px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_controller') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getHasTouch() == false)) && 
				((player.getOS() != 6))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style.transition='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
				else {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
			}
		}
		me._controller.logicBlock_visible();
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_bg=document.createElement('div');
		el.ggId="controller_zoom_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((134px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 134px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasZoom() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_zoom_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_zoom_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_zoom_bg.style.transition='';
				if (me._controller_zoom_bg.ggCurrentLogicStateVisible == 0) {
					me._controller_zoom_bg.style.visibility="hidden";
					me._controller_zoom_bg.ggVisible=false;
				}
				else {
					me._controller_zoom_bg.style.visibility=(Number(me._controller_zoom_bg.style.opacity)>0||!me._controller_zoom_bg.style.opacity)?'inherit':'hidden';
					me._controller_zoom_bg.ggVisible=true;
				}
			}
		}
		me._controller_zoom_bg.logicBlock_visible();
		me._controller_zoom_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_in_bg=document.createElement('div');
		el.ggId="controller_zoom_in_bg";
		el.ggDx=38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 38px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Shift');
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_in_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_in_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_zoom_in_bg'] == true)) && 
				((player.canZoomIn() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_zoom_in_bg.style.transition='background-color 0s';
				if (me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_zoom_in_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_zoom_in_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		me._controller_zoom_in_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_zoom_in_bg']=true;
			me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_in_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=true;
		}
		me._controller_zoom_in_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=false;
		}
		me._controller_zoom_in_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=false;
			me.elementMouseOver['controller_zoom_in_bg']=false;
			me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_zoom_in_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_zoom_in_bg']) {
				if (
					(
						((player.canZoomIn() == true))
					)
				) {
					player.changeZoom(-0.5,true);
				}
			}
		}
		me._controller_zoom_in_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_in_enabled=document.createElement('div');
		els=me._controller_zoom_in_enabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMTYiIHgyPSI0OCIgeTE9IjMyIiB5Mj0iMzIiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm'+
			'9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSIzMiIgeDI9IjMyIiB5MT0iMTYiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_zoom_in_enabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_zoom_in_enabled__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTYiIHgyPSI0OCIgeTE9IjMyIiB5Mj0iMzIiLz4KICA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzIiIHgyPSIzMiIgeTE9IjE2IiB5Mj0iNDgiLz4KIDwvZz4K'+
			'PC9zdmc+Cg==';
		me._controller_zoom_in_enabled__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_zoom_in_enabled";
		el.ggDx=10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_in_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_in_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canZoomIn() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_zoom_in_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_zoom_in_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_zoom_in_enabled.style.transition='';
				if (me._controller_zoom_in_enabled.ggCurrentLogicStateVisible == 0) {
					me._controller_zoom_in_enabled.style.visibility="hidden";
					me._controller_zoom_in_enabled.ggVisible=false;
				}
				else {
					me._controller_zoom_in_enabled.style.visibility=(Number(me._controller_zoom_in_enabled.style.opacity)>0||!me._controller_zoom_in_enabled.style.opacity)?'inherit':'hidden';
					me._controller_zoom_in_enabled.ggVisible=true;
				}
			}
		}
		me._controller_zoom_in_enabled.logicBlock_visible();
		me._controller_zoom_in_enabled.onmouseenter=function (e) {
			me._controller_zoom_in_enabled__img.style.visibility='hidden';
			me._controller_zoom_in_enabled__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_zoom_in_enabled']=true;
		}
		me._controller_zoom_in_enabled.onmouseleave=function (e) {
			me._controller_zoom_in_enabled__img.style.visibility='inherit';
			me._controller_zoom_in_enabled__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_zoom_in_enabled']=false;
		}
		me._controller_zoom_in_enabled.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_in_bg.appendChild(me._controller_zoom_in_enabled);
		el=me._controller_zoom_in_disabled=document.createElement('div');
		els=me._controller_zoom_in_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzVhNWE1YTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTYiIHgyPSI0OCIgeTE9IjMyIiB5Mj0iMzIiLz4KICA8bGluZSBzdH'+
			'lsZT0iZmlsbDpub25lO3N0cm9rZTojNWE1YTVhO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHgxPSIzMiIgeDI9IjMyIiB5MT0iMTYiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_zoom_in_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_zoom_in_disabled";
		el.ggDx=10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_in_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_in_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canZoomIn() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_zoom_in_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_zoom_in_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_zoom_in_disabled.style.transition='';
				if (me._controller_zoom_in_disabled.ggCurrentLogicStateVisible == 0) {
					me._controller_zoom_in_disabled.style.visibility=(Number(me._controller_zoom_in_disabled.style.opacity)>0||!me._controller_zoom_in_disabled.style.opacity)?'inherit':'hidden';
					me._controller_zoom_in_disabled.ggVisible=true;
				}
				else {
					me._controller_zoom_in_disabled.style.visibility="hidden";
					me._controller_zoom_in_disabled.ggVisible=false;
				}
			}
		}
		me._controller_zoom_in_disabled.logicBlock_visible();
		me._controller_zoom_in_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_in_bg.appendChild(me._controller_zoom_in_disabled);
		me._controller_zoom_bg.appendChild(me._controller_zoom_in_bg);
		el=me._controller_zoom_out_bg=document.createElement('div');
		el.ggId="controller_zoom_out_bg";
		el.ggDx=-38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) - 38px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Alt');
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_out_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_out_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_zoom_out_bg'] == true)) && 
				((player.canZoomOut() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_zoom_out_bg.style.transition='background-color 0s';
				if (me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_zoom_out_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_zoom_out_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		me._controller_zoom_out_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_zoom_out_bg']=true;
			me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_out_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=true;
		}
		me._controller_zoom_out_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=false;
		}
		me._controller_zoom_out_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=false;
			me.elementMouseOver['controller_zoom_out_bg']=false;
			me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_zoom_out_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_zoom_out_bg']) {
				if (
					(
						((player.canZoomOut() == true))
					)
				) {
					player.changeZoom(0.5,true);
				}
			}
		}
		me._controller_zoom_out_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_out_enabled=document.createElement('div');
		els=me._controller_zoom_out_enabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMTYiIHgyPSI0OCIgeTE9IjMyIiB5Mj0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_zoom_out_enabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_zoom_out_enabled__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTYiIHgyPSI0OCIgeTE9IjMyIiB5Mj0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_zoom_out_enabled__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_zoom_out_enabled";
		el.ggDx=-10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_out_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_out_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canZoomOut() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_zoom_out_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_zoom_out_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_zoom_out_enabled.style.transition='';
				if (me._controller_zoom_out_enabled.ggCurrentLogicStateVisible == 0) {
					me._controller_zoom_out_enabled.style.visibility="hidden";
					me._controller_zoom_out_enabled.ggVisible=false;
				}
				else {
					me._controller_zoom_out_enabled.style.visibility=(Number(me._controller_zoom_out_enabled.style.opacity)>0||!me._controller_zoom_out_enabled.style.opacity)?'inherit':'hidden';
					me._controller_zoom_out_enabled.ggVisible=true;
				}
			}
		}
		me._controller_zoom_out_enabled.logicBlock_visible();
		me._controller_zoom_out_enabled.onmouseenter=function (e) {
			me._controller_zoom_out_enabled__img.style.visibility='hidden';
			me._controller_zoom_out_enabled__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_zoom_out_enabled']=true;
		}
		me._controller_zoom_out_enabled.onmouseleave=function (e) {
			me._controller_zoom_out_enabled__img.style.visibility='inherit';
			me._controller_zoom_out_enabled__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_zoom_out_enabled']=false;
		}
		me._controller_zoom_out_enabled.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_out_bg.appendChild(me._controller_zoom_out_enabled);
		el=me._controller_zoom_out_disabled=document.createElement('div');
		els=me._controller_zoom_out_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzVhNWE1YTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTYiIHgyPSI0OCIgeTE9IjMyIiB5Mj0iMzIiLz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._controller_zoom_out_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_zoom_out_disabled";
		el.ggDx=-10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_out_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_out_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canZoomOut() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_zoom_out_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_zoom_out_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_zoom_out_disabled.style.transition='';
				if (me._controller_zoom_out_disabled.ggCurrentLogicStateVisible == 0) {
					me._controller_zoom_out_disabled.style.visibility=(Number(me._controller_zoom_out_disabled.style.opacity)>0||!me._controller_zoom_out_disabled.style.opacity)?'inherit':'hidden';
					me._controller_zoom_out_disabled.ggVisible=true;
				}
				else {
					me._controller_zoom_out_disabled.style.visibility="hidden";
					me._controller_zoom_out_disabled.ggVisible=false;
				}
			}
		}
		me._controller_zoom_out_disabled.logicBlock_visible();
		me._controller_zoom_out_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_out_bg.appendChild(me._controller_zoom_out_disabled);
		me._controller_zoom_bg.appendChild(me._controller_zoom_out_bg);
		me._controller.appendChild(me._controller_zoom_bg);
		el=me._controller_move_bg=document.createElement('div');
		el.ggId="controller_move_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_container_singlerow=document.createElement('div');
		el.ggId="controller_move_container_singlerow";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_container_singlerow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_container_singlerow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_container_singlerow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_container_singlerow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_container_singlerow.style.transition='';
				if (me._controller_move_container_singlerow.ggCurrentLogicStateVisible == 0) {
					me._controller_move_container_singlerow.style.visibility=(Number(me._controller_move_container_singlerow.style.opacity)>0||!me._controller_move_container_singlerow.style.opacity)?'inherit':'hidden';
					me._controller_move_container_singlerow.ggVisible=true;
				}
				else {
					me._controller_move_container_singlerow.style.visibility="hidden";
					me._controller_move_container_singlerow.ggVisible=false;
				}
			}
		}
		me._controller_move_container_singlerow.logicBlock_visible();
		me._controller_move_container_singlerow.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_right_singlerow=document.createElement('div');
		el.ggId="controller_move_right_singlerow";
		el.ggDx=16;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_right_singlerow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_singlerow.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_right_singlerow'] == true)) && 
				((player.canPanRight() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_right_singlerow.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_right_singlerow.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_right_singlerow.style.transition='background-color 0s';
				if (me._controller_move_right_singlerow.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_right_singlerow.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_right_singlerow.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_right_singlerow.logicBlock_backgroundcolor();
		me._controller_move_right_singlerow.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_right_singlerow']=true;
			me._controller_move_right_sr_hover_icon.logicBlock_visible();
			me._controller_move_right_singlerow.logicBlock_backgroundcolor();
		}
		me._controller_move_right_singlerow.onmousedown=function (e) {
			me.elementMouseDown['controller_move_right_singlerow']=true;
		}
		me._controller_move_right_singlerow.onmouseup=function (e) {
			me.elementMouseDown['controller_move_right_singlerow']=false;
		}
		me._controller_move_right_singlerow.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_right_singlerow']=false;
			me.elementMouseOver['controller_move_right_singlerow']=false;
			me._controller_move_right_sr_hover_icon.logicBlock_visible();
			me._controller_move_right_singlerow.logicBlock_backgroundcolor();
		}
		me._controller_move_right_singlerow.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_right_singlerow.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_right_singlerow']) {
				if (
					(
						((player.canPanRight() == true))
					)
				) {
					player.changePanLog(-0.3,true);
				}
			}
		}
		me._controller_move_right_singlerow.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_right_sr_icon=document.createElement('div');
		els=me._controller_move_right_sr_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSAxMTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1NSAxMTIiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0U2RTZFNjtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CiA8ZyBpZD0iY2lyY2xlIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYuOCw5My4xYzQuMy0yLjIsOC4yLTUuMiwxMS42LTljMTQuMy0xNi4yLDEyLjctNDAuOS0zLjUtNTUuMmMtMi4yLTEuOS00LjYtMy41LTctNC45Ii8+CiAgPGc+CiAgIDxnPgogICAgPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMTcuNSw0MS4zIDE3LjMsMjIuNSAxNy4zLDIyLjUgMzYsMjIuMyAgICAiLz4KICAgPC9n'+
			'PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_move_right_sr_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_sr_icon";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_right_sr_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_sr_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanRight() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_sr_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_sr_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_sr_icon.style.transition='';
				if (me._controller_move_right_sr_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_sr_icon.style.visibility="hidden";
					me._controller_move_right_sr_icon.ggVisible=false;
				}
				else {
					me._controller_move_right_sr_icon.style.visibility=(Number(me._controller_move_right_sr_icon.style.opacity)>0||!me._controller_move_right_sr_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_sr_icon.ggVisible=true;
				}
			}
		}
		me._controller_move_right_sr_icon.logicBlock_visible();
		me._controller_move_right_sr_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_singlerow.appendChild(me._controller_move_right_sr_icon);
		el=me._controller_move_right_sr_hover_icon=document.createElement('div');
		els=me._controller_move_right_sr_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSAxMTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1NSAxMTIiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CiA8ZyBpZD0iY2lyY2xlIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYuOCw5My4xYzQuMy0yLjIsOC4yLTUuMiwxMS42LTljMTQuMy0xNi4yLDEyLjctNDAuOS0zLjUtNTUuMmMtMi4yLTEuOS00LjYtMy41LTctNC45Ii8+CiAgPGc+CiAgIDxnPgogICAgPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMTcuNSw0MS4zIDE3LjMsMjIuNSAxNy4zLDIyLjUgMzYsMjIuMyAgICAiLz4KICAgPC9n'+
			'PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_move_right_sr_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_sr_hover_icon";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_right_sr_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_sr_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_right_singlerow'] == true)) && 
				((player.canPanRight() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_sr_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_sr_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_sr_hover_icon.style.transition='';
				if (me._controller_move_right_sr_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_sr_hover_icon.style.visibility=(Number(me._controller_move_right_sr_hover_icon.style.opacity)>0||!me._controller_move_right_sr_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_sr_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_right_sr_hover_icon.style.visibility="hidden";
					me._controller_move_right_sr_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_right_sr_hover_icon.logicBlock_visible();
		me._controller_move_right_sr_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_singlerow.appendChild(me._controller_move_right_sr_hover_icon);
		el=me._controller_move_right_sr_disabled_icon=document.createElement('div');
		els=me._controller_move_right_sr_disabled_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSAxMTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1NSAxMTIiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzVhNWE1YTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CiA8ZyBpZD0iY2lyY2xlIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYuOCw5My4xYzQuMy0yLjIsOC4yLTUuMiwxMS42LTljMTQuMy0xNi4yLDEyLjctNDAuOS0zLjUtNTUuMmMtMi4yLTEuOS00LjYtMy41LTctNC45Ii8+CiAgPGc+CiAgIDxnPgogICAgPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMTcuNSw0MS4zIDE3LjMsMjIuNSAxNy4zLDIyLjUgMzYsMjIuMyAgICAiLz4KICAgPC9n'+
			'PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_move_right_sr_disabled_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_sr_disabled_icon";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_right_sr_disabled_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_sr_disabled_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanRight() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_sr_disabled_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_sr_disabled_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_sr_disabled_icon.style.transition='';
				if (me._controller_move_right_sr_disabled_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_sr_disabled_icon.style.visibility=(Number(me._controller_move_right_sr_disabled_icon.style.opacity)>0||!me._controller_move_right_sr_disabled_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_sr_disabled_icon.ggVisible=true;
				}
				else {
					me._controller_move_right_sr_disabled_icon.style.visibility="hidden";
					me._controller_move_right_sr_disabled_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_right_sr_disabled_icon.logicBlock_visible();
		me._controller_move_right_sr_disabled_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_singlerow.appendChild(me._controller_move_right_sr_disabled_icon);
		me._controller_move_container_singlerow.appendChild(me._controller_move_right_singlerow);
		el=me._controller_move_left_singlerow=document.createElement('div');
		el.ggId="controller_move_left_singlerow";
		el.ggDx=-16;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_left_singlerow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_singlerow.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_left_singlerow'] == true)) && 
				((player.canPanLeft() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_left_singlerow.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_left_singlerow.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_left_singlerow.style.transition='background-color 0s';
				if (me._controller_move_left_singlerow.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_left_singlerow.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_left_singlerow.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_left_singlerow.logicBlock_backgroundcolor();
		me._controller_move_left_singlerow.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_left_singlerow']=true;
			me._controller_move_left_sr_hover_icon.logicBlock_visible();
			me._controller_move_left_singlerow.logicBlock_backgroundcolor();
		}
		me._controller_move_left_singlerow.onmousedown=function (e) {
			me.elementMouseDown['controller_move_left_singlerow']=true;
		}
		me._controller_move_left_singlerow.onmouseup=function (e) {
			me.elementMouseDown['controller_move_left_singlerow']=false;
		}
		me._controller_move_left_singlerow.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_left_singlerow']=false;
			me.elementMouseOver['controller_move_left_singlerow']=false;
			me._controller_move_left_sr_hover_icon.logicBlock_visible();
			me._controller_move_left_singlerow.logicBlock_backgroundcolor();
		}
		me._controller_move_left_singlerow.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_left_singlerow.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_left_singlerow']) {
				if (
					(
						((player.canPanLeft() == true))
					)
				) {
					player.changePanLog(0.3,true);
				}
			}
		}
		me._controller_move_left_singlerow.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_left_sr_icon=document.createElement('div');
		els=me._controller_move_left_sr_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSAxMTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1NSAxMTIiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0U2RTZFNjtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CiA8ZyBpZD0iY2lyY2xlIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzguMSw5Mi4yYy00LjQtMi4yLTguMi01LjItMTEuNi05QzEyLjMsNjYuOSwxMy45LDQyLjMsMzAuMSwyOGMyLjItMS45LDQuNi0zLjUsNi45LTQuOSIvPgogIDxnPgogICA8Zz4KICAgIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjM3LjQsNDAuNSAzNy42LDIxLjcgMzcuNiwyMS43IDE4LjksMjEuNSAgICAiLz4KICAg'+
			'PC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_move_left_sr_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_sr_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_left_sr_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_sr_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanLeft() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_sr_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_sr_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_sr_icon.style.transition='';
				if (me._controller_move_left_sr_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_sr_icon.style.visibility="hidden";
					me._controller_move_left_sr_icon.ggVisible=false;
				}
				else {
					me._controller_move_left_sr_icon.style.visibility=(Number(me._controller_move_left_sr_icon.style.opacity)>0||!me._controller_move_left_sr_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_sr_icon.ggVisible=true;
				}
			}
		}
		me._controller_move_left_sr_icon.logicBlock_visible();
		me._controller_move_left_sr_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_singlerow.appendChild(me._controller_move_left_sr_icon);
		el=me._controller_move_left_sr_hover_icon=document.createElement('div');
		els=me._controller_move_left_sr_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSAxMTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1NSAxMTIiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CiA8ZyBpZD0iY2lyY2xlIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzguMiw5Mi4yYy00LjMtMi4yLTguMi01LjItMTEuNi05Yy0xNC4yLTE2LjMtMTIuNy00MC45LDMuNS01NS4yYzIuMi0xLjksNC42LTMuNSw3LTQuOSIvPgogIDxnPgogICA8Zz4KICAgIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjM3LjQsNDAuNSAzNy42LDIxLjcgMzcuNiwyMS43IDE4LjksMjEuNSAgICAiLz4KICAg'+
			'PC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_move_left_sr_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_sr_hover_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_left_sr_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_sr_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_left_singlerow'] == true)) && 
				((player.canPanLeft() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_sr_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_sr_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_sr_hover_icon.style.transition='';
				if (me._controller_move_left_sr_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_sr_hover_icon.style.visibility=(Number(me._controller_move_left_sr_hover_icon.style.opacity)>0||!me._controller_move_left_sr_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_sr_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_left_sr_hover_icon.style.visibility="hidden";
					me._controller_move_left_sr_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_left_sr_hover_icon.logicBlock_visible();
		me._controller_move_left_sr_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_singlerow.appendChild(me._controller_move_left_sr_hover_icon);
		el=me._controller_move_left_sr_disabled_icon=document.createElement('div');
		els=me._controller_move_left_sr_disabled_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSAxMTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1NSAxMTIiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzVhNWE1YTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CiA8ZyBpZD0iY2lyY2xlIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzguMiw5Mi4yYy00LjMtMi4yLTguMi01LjItMTEuNi05Yy0xNC4yLTE2LjMtMTIuNy00MC45LDMuNS01NS4yYzIuMi0xLjksNC42LTMuNSw3LTQuOSIvPgogIDxnPgogICA8Zz4KICAgIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjM3LjQsNDAuNSAzNy42LDIxLjcgMzcuNiwyMS43IDE4LjksMjEuNSAgICAiLz4KICAg'+
			'PC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_move_left_sr_disabled_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_sr_disabled_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_left_sr_disabled_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_sr_disabled_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanLeft() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_sr_disabled_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_sr_disabled_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_sr_disabled_icon.style.transition='';
				if (me._controller_move_left_sr_disabled_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_sr_disabled_icon.style.visibility=(Number(me._controller_move_left_sr_disabled_icon.style.opacity)>0||!me._controller_move_left_sr_disabled_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_sr_disabled_icon.ggVisible=true;
				}
				else {
					me._controller_move_left_sr_disabled_icon.style.visibility="hidden";
					me._controller_move_left_sr_disabled_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_left_sr_disabled_icon.logicBlock_visible();
		me._controller_move_left_sr_disabled_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_singlerow.appendChild(me._controller_move_left_sr_disabled_icon);
		me._controller_move_container_singlerow.appendChild(me._controller_move_left_singlerow);
		me._controller_move_bg.appendChild(me._controller_move_container_singlerow);
		el=me._controller_move_container=document.createElement('div');
		el.ggId="controller_move_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_container.style.transition='';
				if (me._controller_move_container.ggCurrentLogicStateVisible == 0) {
					me._controller_move_container.style.visibility="hidden";
					me._controller_move_container.ggVisible=false;
				}
				else {
					me._controller_move_container.style.visibility=(Number(me._controller_move_container.style.opacity)>0||!me._controller_move_container.style.opacity)?'inherit':'hidden';
					me._controller_move_container.ggVisible=true;
				}
			}
		}
		me._controller_move_container.logicBlock_visible();
		me._controller_move_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_left_bg=document.createElement('div');
		el.ggId="controller_move_left_bg";
		el.ggDx=-16;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Left');
		el.style.transformOrigin='50% 50%';
		me._controller_move_left_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_left_bg'] == true)) && 
				((player.canPanLeft() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_left_bg.style.transition='background-color 0s';
				if (me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_left_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_left_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_left_bg.logicBlock_backgroundcolor();
		me._controller_move_left_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_left_bg']=true;
			me._controller_move_left_hover_icon.logicBlock_visible();
			me._controller_move_left_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_left_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_left_bg']=true;
		}
		me._controller_move_left_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_left_bg']=false;
		}
		me._controller_move_left_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_left_bg']=false;
			me.elementMouseOver['controller_move_left_bg']=false;
			me._controller_move_left_hover_icon.logicBlock_visible();
			me._controller_move_left_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_left_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_left_bg']) {
				if (
					(
						((player.canPanLeft() == true))
					)
				) {
					player.changePanLog(0.3,true);
				}
			}
		}
		me._controller_move_left_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_left_icon=document.createElement('div');
		els=me._controller_move_left_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzguOTYgNDUuOTMgMjUuMDQgMzEuOTkgMjUuMDQgMzEuOTkgMzguOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_left_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_icon";
		el.ggDx=2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_left_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanLeft() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_icon.style.transition='';
				if (me._controller_move_left_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_icon.style.visibility="hidden";
					me._controller_move_left_icon.ggVisible=false;
				}
				else {
					me._controller_move_left_icon.style.visibility=(Number(me._controller_move_left_icon.style.opacity)>0||!me._controller_move_left_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_icon.ggVisible=true;
				}
			}
		}
		me._controller_move_left_icon.logicBlock_visible();
		me._controller_move_left_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_bg.appendChild(me._controller_move_left_icon);
		el=me._controller_move_left_hover_icon=document.createElement('div');
		els=me._controller_move_left_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzguOTYgNDUuOTMgMjUuMDQgMzEuOTkgMjUuMDQgMzEuOTkgMzguOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_left_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_hover_icon";
		el.ggDx=2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_left_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_left_bg'] == true)) && 
				((player.canPanLeft() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_hover_icon.style.transition='';
				if (me._controller_move_left_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_hover_icon.style.visibility=(Number(me._controller_move_left_hover_icon.style.opacity)>0||!me._controller_move_left_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_left_hover_icon.style.visibility="hidden";
					me._controller_move_left_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_left_hover_icon.logicBlock_visible();
		me._controller_move_left_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_bg.appendChild(me._controller_move_left_hover_icon);
		el=me._controller_move_left_disabled_icon=document.createElement('div');
		els=me._controller_move_left_disabled_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzguOTYgNDUuOTMgMjUuMDQgMzEuOTkgMjUuMDQgMzEuOTkgMzguOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM1YTVhNWE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_left_disabled_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_disabled_icon";
		el.ggDx=2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_left_disabled_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_disabled_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanLeft() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_disabled_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_disabled_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_disabled_icon.style.transition='';
				if (me._controller_move_left_disabled_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_disabled_icon.style.visibility=(Number(me._controller_move_left_disabled_icon.style.opacity)>0||!me._controller_move_left_disabled_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_disabled_icon.ggVisible=true;
				}
				else {
					me._controller_move_left_disabled_icon.style.visibility="hidden";
					me._controller_move_left_disabled_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_left_disabled_icon.logicBlock_visible();
		me._controller_move_left_disabled_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_bg.appendChild(me._controller_move_left_disabled_icon);
		me._controller_move_container.appendChild(me._controller_move_left_bg);
		el=me._controller_move_down_bg=document.createElement('div');
		el.ggId="controller_move_down_bg";
		el.ggDx=16;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Down');
		el.style.transformOrigin='50% 50%';
		me._controller_move_down_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_down_bg'] == true)) && 
				((player.canTiltDown() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_down_bg.style.transition='background-color 0s';
				if (me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_down_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_down_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_down_bg.logicBlock_backgroundcolor();
		me._controller_move_down_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_down_bg']=true;
			me._controller_move_down_hover_icon.logicBlock_visible();
			me._controller_move_down_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_down_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_down_bg']=true;
		}
		me._controller_move_down_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_down_bg']=false;
		}
		me._controller_move_down_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_down_bg']=false;
			me.elementMouseOver['controller_move_down_bg']=false;
			me._controller_move_down_hover_icon.logicBlock_visible();
			me._controller_move_down_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_down_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_down_bg']) {
				if (
					(
						((player.canTiltDown() == true))
					)
				) {
					player.changeTiltLog(-0.3,true);
				}
			}
		}
		me._controller_move_down_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_down_icon=document.createElement('div');
		els=me._controller_move_down_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTMgMjUuMDQgMzEuOTkgMzguOTYgMzEuOTkgMzguOTYgMTguMDcgMjUuMDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_down_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_down_icon";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_down_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canTiltDown() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_down_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_down_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_down_icon.style.transition='';
				if (me._controller_move_down_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_down_icon.style.visibility="hidden";
					me._controller_move_down_icon.ggVisible=false;
				}
				else {
					me._controller_move_down_icon.style.visibility=(Number(me._controller_move_down_icon.style.opacity)>0||!me._controller_move_down_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_down_icon.ggVisible=true;
				}
			}
		}
		me._controller_move_down_icon.logicBlock_visible();
		me._controller_move_down_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_down_bg.appendChild(me._controller_move_down_icon);
		el=me._controller_move_down_hover_icon=document.createElement('div');
		els=me._controller_move_down_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTMgMjUuMDQgMzEuOTkgMzguOTYgMzEuOTkgMzguOTYgMTguMDcgMjUuMDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_down_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_down_hover_icon";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_down_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_down_bg'] == true)) && 
				((player.canTiltDown() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_down_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_down_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_down_hover_icon.style.transition='';
				if (me._controller_move_down_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_down_hover_icon.style.visibility=(Number(me._controller_move_down_hover_icon.style.opacity)>0||!me._controller_move_down_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_down_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_down_hover_icon.style.visibility="hidden";
					me._controller_move_down_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_down_hover_icon.logicBlock_visible();
		me._controller_move_down_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_down_bg.appendChild(me._controller_move_down_hover_icon);
		el=me._controller_move_down_disabled_icon=document.createElement('div');
		els=me._controller_move_down_disabled_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTMgMjUuMDQgMzEuOTkgMzguOTYgMzEuOTkgMzguOTYgMTguMDcgMjUuMDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM1YTVhNWE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_down_disabled_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_down_disabled_icon";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_down_disabled_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_disabled_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canTiltDown() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_down_disabled_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_down_disabled_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_down_disabled_icon.style.transition='';
				if (me._controller_move_down_disabled_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_down_disabled_icon.style.visibility=(Number(me._controller_move_down_disabled_icon.style.opacity)>0||!me._controller_move_down_disabled_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_down_disabled_icon.ggVisible=true;
				}
				else {
					me._controller_move_down_disabled_icon.style.visibility="hidden";
					me._controller_move_down_disabled_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_down_disabled_icon.logicBlock_visible();
		me._controller_move_down_disabled_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_down_bg.appendChild(me._controller_move_down_disabled_icon);
		me._controller_move_container.appendChild(me._controller_move_down_bg);
		el=me._controller_move_right_bg=document.createElement('div');
		el.ggId="controller_move_right_bg";
		el.ggDx=16;
		el.ggDy=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Right');
		el.style.transformOrigin='50% 50%';
		me._controller_move_right_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_right_bg'] == true)) && 
				((player.canPanRight() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_right_bg.style.transition='background-color 0s';
				if (me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_right_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_right_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_right_bg.logicBlock_backgroundcolor();
		me._controller_move_right_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_right_bg']=true;
			me._controller_move_right_hover_icon.logicBlock_visible();
			me._controller_move_right_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_right_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_right_bg']=true;
		}
		me._controller_move_right_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_right_bg']=false;
		}
		me._controller_move_right_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_right_bg']=false;
			me.elementMouseOver['controller_move_right_bg']=false;
			me._controller_move_right_hover_icon.logicBlock_visible();
			me._controller_move_right_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_right_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_right_bg']) {
				if (
					(
						((player.canPanRight() == true))
					)
				) {
					player.changePanLog(-0.3,true);
				}
			}
		}
		me._controller_move_right_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_right_icon=document.createElement('div');
		els=me._controller_move_right_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjUuMDQgMTguMDcgMzguOTYgMzIuMDEgMzguOTYgMzIuMDEgMjUuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_right_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_icon";
		el.ggDx=-2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_right_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanRight() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_icon.style.transition='';
				if (me._controller_move_right_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_icon.style.visibility="hidden";
					me._controller_move_right_icon.ggVisible=false;
				}
				else {
					me._controller_move_right_icon.style.visibility=(Number(me._controller_move_right_icon.style.opacity)>0||!me._controller_move_right_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_icon.ggVisible=true;
				}
			}
		}
		me._controller_move_right_icon.logicBlock_visible();
		me._controller_move_right_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_bg.appendChild(me._controller_move_right_icon);
		el=me._controller_move_right_hover_icon=document.createElement('div');
		els=me._controller_move_right_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjUuMDQgMTguMDcgMzguOTYgMzIuMDEgMzguOTYgMzIuMDEgMjUuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_right_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_hover_icon";
		el.ggDx=-2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_right_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_right_bg'] == true)) && 
				((player.canPanRight() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_hover_icon.style.transition='';
				if (me._controller_move_right_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_hover_icon.style.visibility=(Number(me._controller_move_right_hover_icon.style.opacity)>0||!me._controller_move_right_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_right_hover_icon.style.visibility="hidden";
					me._controller_move_right_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_right_hover_icon.logicBlock_visible();
		me._controller_move_right_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_bg.appendChild(me._controller_move_right_hover_icon);
		el=me._controller_move_right_disabled_icon=document.createElement('div');
		els=me._controller_move_right_disabled_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjUuMDQgMTguMDcgMzguOTYgMzIuMDEgMzguOTYgMzIuMDEgMjUuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM1YTVhNWE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_right_disabled_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_disabled_icon";
		el.ggDx=-2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_right_disabled_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_disabled_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canPanRight() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_disabled_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_disabled_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_disabled_icon.style.transition='';
				if (me._controller_move_right_disabled_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_disabled_icon.style.visibility=(Number(me._controller_move_right_disabled_icon.style.opacity)>0||!me._controller_move_right_disabled_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_disabled_icon.ggVisible=true;
				}
				else {
					me._controller_move_right_disabled_icon.style.visibility="hidden";
					me._controller_move_right_disabled_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_right_disabled_icon.logicBlock_visible();
		me._controller_move_right_disabled_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_bg.appendChild(me._controller_move_right_disabled_icon);
		me._controller_move_container.appendChild(me._controller_move_right_bg);
		el=me._controller_move_up_bg=document.createElement('div');
		el.ggId="controller_move_up_bg";
		el.ggDx=-16;
		el.ggDy=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Up');
		el.style.transformOrigin='50% 50%';
		me._controller_move_up_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_up_bg'] == true)) && 
				((player.canTiltUp() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_up_bg.style.transition='background-color 0s';
				if (me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_up_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_up_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_up_bg.logicBlock_backgroundcolor();
		me._controller_move_up_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_up_bg']=true;
			me._controller_move_up_hover_icon.logicBlock_visible();
			me._controller_move_up_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_up_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_up_bg']=true;
		}
		me._controller_move_up_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_up_bg']=false;
		}
		me._controller_move_up_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_up_bg']=false;
			me.elementMouseOver['controller_move_up_bg']=false;
			me._controller_move_up_hover_icon.logicBlock_visible();
			me._controller_move_up_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_up_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_up_bg']) {
				if (
					(
						((player.canTiltUp() == true))
					)
				) {
					player.changeTiltLog(0.3,true);
				}
			}
		}
		me._controller_move_up_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_up_icon=document.createElement('div');
		els=me._controller_move_up_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_up_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_up_icon";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_up_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canTiltUp() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_up_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_up_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_up_icon.style.transition='';
				if (me._controller_move_up_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_up_icon.style.visibility="hidden";
					me._controller_move_up_icon.ggVisible=false;
				}
				else {
					me._controller_move_up_icon.style.visibility=(Number(me._controller_move_up_icon.style.opacity)>0||!me._controller_move_up_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_up_icon.ggVisible=true;
				}
			}
		}
		me._controller_move_up_icon.logicBlock_visible();
		me._controller_move_up_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_up_bg.appendChild(me._controller_move_up_icon);
		el=me._controller_move_up_hover_icon=document.createElement('div');
		els=me._controller_move_up_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_up_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_up_hover_icon";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_up_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_up_bg'] == true)) && 
				((player.canTiltUp() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_up_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_up_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_up_hover_icon.style.transition='';
				if (me._controller_move_up_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_up_hover_icon.style.visibility=(Number(me._controller_move_up_hover_icon.style.opacity)>0||!me._controller_move_up_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_up_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_up_hover_icon.style.visibility="hidden";
					me._controller_move_up_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_up_hover_icon.logicBlock_visible();
		me._controller_move_up_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_up_bg.appendChild(me._controller_move_up_hover_icon);
		el=me._controller_move_up_disabled_icon=document.createElement('div');
		els=me._controller_move_up_disabled_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM1YTVhNWE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_up_disabled_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_up_disabled_icon";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_up_disabled_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_disabled_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.canTiltUp() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_up_disabled_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_up_disabled_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_up_disabled_icon.style.transition='';
				if (me._controller_move_up_disabled_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_up_disabled_icon.style.visibility=(Number(me._controller_move_up_disabled_icon.style.opacity)>0||!me._controller_move_up_disabled_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_up_disabled_icon.ggVisible=true;
				}
				else {
					me._controller_move_up_disabled_icon.style.visibility="hidden";
					me._controller_move_up_disabled_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_up_disabled_icon.logicBlock_visible();
		me._controller_move_up_disabled_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_up_bg.appendChild(me._controller_move_up_disabled_icon);
		me._controller_move_container.appendChild(me._controller_move_up_bg);
		me._controller_move_bg.appendChild(me._controller_move_container);
		me._controller.appendChild(me._controller_move_bg);
		el=me._controller_center_dot=document.createElement('div');
		el.ggId="controller_center_dot";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='height : 10px;';
		hs+='left : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_center_dot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_center_dot.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controller_center_dot);
		me._container_controls.appendChild(me._controller);
		el=me._share=document.createElement('div');
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : 64px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._share.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._share.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._share.style.transition='left 0s, bottom 0s';
				if (me._share.ggCurrentLogicStatePosition == 0) {
					me._share.style.left='16px';
					me._share.style.bottom='72px';
				}
				else {
					me._share.style.left='16px';
					me._share.style.bottom='72px';
				}
			}
		}
		me._share.logicBlock_position();
		me._share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share.style.transition='left 0s, bottom 0s';
				if (me._share.ggCurrentLogicStateVisible == 0) {
					me._share.style.visibility=(Number(me._share.style.opacity)>0||!me._share.style.opacity)?'inherit':'hidden';
					me._share.ggVisible=true;
				}
				else {
					me._share.style.visibility="hidden";
					me._share.ggVisible=false;
				}
			}
		}
		me._share.logicBlock_visible();
		me._share.ggUpdatePosition=function (useTransition) {
		}
		el=me._copy=document.createElement('div');
		els=me._copy__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaWNvbiI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTkuMDIgMTcgNDcgMTcgNDcgNDQuOTgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxwYXRoIGQ9Ik0xNSwyMVY0OUg0M1YyMVpNMzguMzIsMzdIMzF2Ny4zM0gyN1YzN0gxOS42NlYzM0gyN1YyNS42OGg0VjMzaDcuMzNaIiBzdHlsZT0iZmlsbDojZTZlNmU2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._copy__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._copy__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRlNGQ0ZCIvPgogPC9nPgogPGcgaWQ9Imljb24iPgogIDxwb2x5bGluZSBwb2ludHM9IjE5LjAyIDE3IDQ3IDE3IDQ3IDQ0Ljk4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KICA8cGF0aCBkPSJNMTUsMjFWNDlINDNWMjFaTTM4LjMyLDM3SDMxdjcuMzNIMjdWMzdIMTkuNjZWMzNIMj'+
			'dWMjUuNjhoNFYzM2g3LjMzWiIgc3R5bGU9ImZpbGw6IzE0MTQxNCIvPgogPC9nPgo8L3N2Zz4K';
		me._copy__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="copy";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._copy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copy.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._copy.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._copy.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._copy.style.transition='';
				if (me._copy.ggCurrentLogicStateVisible == 0) {
					me._copy.style.visibility=(Number(me._copy.style.opacity)>0||!me._copy.style.opacity)?'inherit':'hidden';
					me._copy.ggVisible=true;
				}
				else {
					me._copy.style.visibility="hidden";
					me._copy.ggVisible=false;
				}
			}
		}
		me._copy.logicBlock_visible();
		me._copy.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The URL has been copied.");
		}
		me._copy.onmouseenter=function (e) {
			me._copy__img.style.visibility='hidden';
			me._copy__imgo.style.visibility='inherit';
			me.elementMouseOver['copy']=true;
		}
		me._copy.onmouseleave=function (e) {
			me._copy__img.style.visibility='inherit';
			me._copy__imgo.style.visibility='hidden';
			me.elementMouseOver['copy']=false;
		}
		me._copy.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._copy);
		el=me._twitter=document.createElement('div');
		els=me._twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1LjMsMjkuNmwxMi0xNGgtMi45TDM0LDI3LjhsLTguNC0xMi4ySDE2TDI4LjYsMzRMMTYsNDguN2gyLjlsMTEtMTIuOGw4LjgsMTIuOGg5LjZMMzUuMywyOS42TDM1LjMsMjkuNnogICBNMzEuNCwzNC4ybC0xLjMtMS44TDE5LjksMTcuOGg0LjRsOC4yLDExLjhsMS4zLDEuOGwxMC43LDE1LjNoLTQuNEwzMS40LDM0LjJMMzEuNCwzNC4yeiIvPgo8L3N2Zz4K';
		me._twitter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodF8xXyI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIuNSIgY3k9IjMyLjUiIHI9IjI3Ii8+CiA8L2c+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzUuNiwyOS41bDEyLTE0aC0yLjlMMzQuMywyNy42TDI2LDE1LjVoLTkuNkwyOSwzMy45TDE2LjMsNDguNWgyLjlsMTEtMTIuOEwzOSw0OC41aDkuNkwzNS42LDI5LjVMMzUuNiwyOS41eiAgIE0zMS43LDM0bC0xLjMtMS44TDIwLjIsMTcuNmg0LjRsOC4yLDExLjhsMS4z'+
			'LDEuOGwxMC43LDE1LjNoLTQuNEwzMS43LDM0TDMxLjcsMzR6Ii8+Cjwvc3ZnPgo=';
		me._twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._twitter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._twitter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._twitter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._twitter.style.transition='';
				if (me._twitter.ggCurrentLogicStateVisible == 0) {
					me._twitter.style.visibility=(Number(me._twitter.style.opacity)>0||!me._twitter.style.opacity)?'inherit':'hidden';
					me._twitter.ggVisible=true;
				}
				else {
					me._twitter.style.visibility="hidden";
					me._twitter.ggVisible=false;
				}
			}
		}
		me._twitter.logicBlock_visible();
		me._twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._twitter.onmouseenter=function (e) {
			me._twitter__img.style.visibility='hidden';
			me._twitter__imgo.style.visibility='inherit';
			me.elementMouseOver['twitter']=true;
		}
		me._twitter.onmouseleave=function (e) {
			me._twitter__img.style.visibility='inherit';
			me._twitter__imgo.style.visibility='hidden';
			me.elementMouseOver['twitter']=false;
		}
		me._twitter.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._twitter);
		el=me._facebook=document.createElement('div');
		els=me._facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb24iPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NCwzOS4zbDEuNC04LjJoLTguN3YtNS4zYzAtMi4zLDEuMi00LjUsNS4xLTQuNWgzLjl2LTdjLTIuMy0wLjQtNC43LTAuNS03LTAuNmMtNy4xLDAtMTEuOCwzLjktMTEuOCwxMXY2LjQgICBoLTcuOXY4LjJoNy45djIwYzMuNiwwLjcsNi41LDAuNyw5LjcsMC4yVjM5LjNINDR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._facebook__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodF8xXyI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIuMyIgY3k9IjMyLjgiIHI9IjI3Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbiI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ0LDM5LjNsMS40LTguMmgtOC43di01LjNjMC0yLjMsMS4yLTQuNSw1LjEtNC41aDMuOXYtN2MtMi4zLTAuNC00LjctMC41LTctMC42Yy03LjEsMC0xMS44LDMuOS0xMS44LDExdjYuNCAgIGgtNy45djguMmg3Ljl2MjBjMy42LDAuNyw2LjUs'+
			'MC43LDkuNywwLjJWMzkuM0g0NHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._facebook.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._facebook.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._facebook.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._facebook.style.transition='';
				if (me._facebook.ggCurrentLogicStateVisible == 0) {
					me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
					me._facebook.ggVisible=true;
				}
				else {
					me._facebook.style.visibility="hidden";
					me._facebook.ggVisible=false;
				}
			}
		}
		me._facebook.logicBlock_visible();
		me._facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._facebook.onmouseenter=function (e) {
			me._facebook__img.style.visibility='hidden';
			me._facebook__imgo.style.visibility='inherit';
			me.elementMouseOver['facebook']=true;
		}
		me._facebook.onmouseleave=function (e) {
			me._facebook__img.style.visibility='inherit';
			me._facebook__imgo.style.visibility='hidden';
			me.elementMouseOver['facebook']=false;
		}
		me._facebook.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._facebook);
		el=me._share_close=document.createElement('div');
		els=me._share_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._share_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._share_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._share_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="share_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_close.onclick=function (e) {
			player.setVariableValue('vis_share', false);
			if (
				(
					((player.getVariableValue('num_buttons_left') == Number("1")))
				)
			) {
				player.setVariableValue('vis_controls_left', false);
			}
		}
		me._share_close.onmouseenter=function (e) {
			me._share_close__img.style.visibility='hidden';
			me._share_close__imgo.style.visibility='inherit';
			me.elementMouseOver['share_close']=true;
		}
		me._share_close.onmouseleave=function (e) {
			me._share_close__img.style.visibility='inherit';
			me._share_close__imgo.style.visibility='hidden';
			me.elementMouseOver['share_close']=false;
		}
		me._share_close.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._share_close);
		me._container_controls.appendChild(me._share);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text=document.createElement('div');
		els=me._info_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("<strong style=\'font-size: 24px\'>%1<\/strong><br>\n<div>%2<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text.ggUpdateText();
		player.addListener('configloaded', function() {
			me._info_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_text);
		el=me._info_close=document.createElement('div');
		els=me._info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_close.onclick=function (e) {
			player.setVariableValue('vis_info', false);
			if (
				(
					((player.getVariableValue('num_buttons_left') == Number("1")))
				)
			) {
				player.setVariableValue('vis_controls_left', false);
			}
		}
		me._info_close.onmouseenter=function (e) {
			me._info_close__img.style.visibility='hidden';
			me._info_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_close']=true;
		}
		me._info_close.onmouseleave=function (e) {
			me._info_close__img.style.visibility='inherit';
			me._info_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_close']=false;
		}
		me._info_close.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_close);
		me._container_controls.appendChild(me._info);
		me.divSkin.appendChild(me._container_controls);
		el=me._background_blur=document.createElement('div');
		el.ggId="background_blur";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._background_blur.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._background_blur.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_hs_popup_full') == true)) || 
				((player.getVariableValue('vis_video_hs_popup') == true)) || 
				((player.getVariableValue('vis_pdf_hs_popup') == true)) || 
				((player.getVariableValue('vis_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._background_blur.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._background_blur.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._background_blur.style.transition='';
				if (me._background_blur.ggCurrentLogicStateVisible == 0) {
					me._background_blur.style.visibility=(Number(me._background_blur.style.opacity)>0||!me._background_blur.style.opacity)?'inherit':'hidden';
					me._background_blur.ggVisible=true;
				}
				else {
					me._background_blur.style.visibility="hidden";
					me._background_blur.ggVisible=false;
				}
			}
		}
		me._background_blur.logicBlock_visible();
		me._background_blur.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popup_full', false);
			player.setVariableValue('vis_pdf_hs_popup', false);
			player.setVariableValue('vis_url_hs_popup', false);
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
		}
		me._background_blur.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._background_blur);
		el=me._translations_popup=document.createElement('div');
		el.ggId="translations_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_translations') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._translations_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._translations_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._translations_popup.style.transition='';
				if (me._translations_popup.ggCurrentLogicStateVisible == 0) {
					me._translations_popup.style.visibility=(Number(me._translations_popup.style.opacity)>0||!me._translations_popup.style.opacity)?'inherit':'hidden';
					me._translations_popup.ggVisible=true;
				}
				else {
					me._translations_popup.style.visibility="hidden";
					me._translations_popup.ggVisible=false;
				}
			}
		}
		me._translations_popup.logicBlock_visible();
		me._translations_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._translations_popup_close=document.createElement('div');
		els=me._translations_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._translations_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._translations_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._translations_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="translations_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._translations_popup_close.onclick=function (e) {
			player.setVariableValue('vis_translations', false);
		}
		me._translations_popup_close.onmouseenter=function (e) {
			me._translations_popup_close__img.style.visibility='hidden';
			me._translations_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['translations_popup_close']=true;
		}
		me._translations_popup_close.onmouseleave=function (e) {
			me._translations_popup_close__img.style.visibility='inherit';
			me._translations_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['translations_popup_close']=false;
		}
		me._translations_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._translations_popup.appendChild(me._translations_popup_close);
		el=me._translations_scroller=document.createElement('div');
		els=me._translations_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 179px;';
		hs+="";
		els.setAttribute('style',hs);
		me._translations_scroller.ggScrollByX = function(diffX) {
			if(!me._translations_scroller.ggHorScrollVisible || diffX == 0 || me._translations_scroller.ggHPercentVisible >= 1.0) return;
			me._translations_scroller.ggScrollPosX = (me._translations_scroller__horScrollFg.offsetLeft + diffX);
			me._translations_scroller.ggScrollPosX = Math.max(me._translations_scroller.ggScrollPosX, 0);
			me._translations_scroller.ggScrollPosX = Math.min(me._translations_scroller.ggScrollPosX, me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
			me._translations_scroller__horScrollFg.style.left = me._translations_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosX / (me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
			me._translations_scroller__content.style.left = -(Math.round((me._translations_scroller.ggContentWidth * (1.0 - me._translations_scroller.ggHPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentLeftOffset + 'px';
			me._translations_scroller.ggScrollPosXPercent = (me._translations_scroller__horScrollFg.offsetLeft / me._translations_scroller__horScrollBg.offsetWidth);
		}
		me._translations_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._translations_scroller.ggHorScrollVisible || diffX == 0 || me._translations_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._translations_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._translations_scroller.ggScrollPosX >= me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth)) {
					me._translations_scroller.ggScrollPosX = Math.min(me._translations_scroller.ggScrollPosX, me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._translations_scroller.ggScrollPosX <= 0)) {
					me._translations_scroller.ggScrollPosX = Math.max(me._translations_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._translations_scroller__horScrollFg.style.left = me._translations_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosX / (me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
			me._translations_scroller__content.style.left = -(Math.round((me._translations_scroller.ggContentWidth * (1.0 - me._translations_scroller.ggHPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentLeftOffset + 'px';
			me._translations_scroller.ggScrollPosXPercent = (me._translations_scroller__horScrollFg.offsetLeft / me._translations_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._translations_scroller.ggScrollByY = function(diffY) {
			if(!me._translations_scroller.ggVertScrollVisible || diffY == 0 || me._translations_scroller.ggVPercentVisible >= 1.0) return;
			me._translations_scroller.ggScrollPosY = (me._translations_scroller__vertScrollFg.offsetTop + diffY);
			me._translations_scroller.ggScrollPosY = Math.max(me._translations_scroller.ggScrollPosY, 0);
			me._translations_scroller.ggScrollPosY = Math.min(me._translations_scroller.ggScrollPosY, me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
			me._translations_scroller__vertScrollFg.style.top = me._translations_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosY / (me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
			me._translations_scroller__content.style.top = -(Math.round((me._translations_scroller.ggContentHeight * (1.0 - me._translations_scroller.ggVPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentTopOffset + 'px';
			me._translations_scroller.ggScrollPosYPercent = (me._translations_scroller__vertScrollFg.offsetTop / me._translations_scroller__vertScrollBg.offsetHeight);
		}
		me._translations_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._translations_scroller.ggVertScrollVisible || diffY == 0 || me._translations_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._translations_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._translations_scroller.ggScrollPosY >= me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight)) {
					me._translations_scroller.ggScrollPosY = Math.min(me._translations_scroller.ggScrollPosY, me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._translations_scroller.ggScrollPosY <= 0)) {
					me._translations_scroller.ggScrollPosY = Math.max(me._translations_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._translations_scroller__vertScrollFg.style.top = me._translations_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosY / (me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
			me._translations_scroller__content.style.top = -(Math.round((me._translations_scroller.ggContentHeight * (1.0 - me._translations_scroller.ggVPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentTopOffset + 'px';
			me._translations_scroller.ggScrollPosYPercent = (me._translations_scroller__vertScrollFg.offsetTop / me._translations_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._translations_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._translations_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._translations_scroller.ggHPercentVisible);
					me._translations_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._translations_scroller.clientWidth - (me._translations_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._translations_scroller.clientWidth - (me._translations_scroller.ggVertScrollVisible ? 15 : 0))) * me._translations_scroller.ggHPercentVisible);
					me._translations_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._translations_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._translations_scroller.ggVPercentVisible);
					me._translations_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._translations_scroller.clientHeight - (me._translations_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._translations_scroller.clientHeight - (me._translations_scroller.ggHorScrollVisible ? 15 : 0))) * me._translations_scroller.ggVPercentVisible);
					me._translations_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._translations_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._translations_scroller.ggDragInertiaX *= 0.96;
				me._translations_scroller.ggDragInertiaY *= 0.96;
				me._translations_scroller.ggScrollByX(me._translations_scroller.ggDragInertiaX);
				me._translations_scroller.ggScrollByY(me._translations_scroller.ggDragInertiaY);
				if (Math.abs(me._translations_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._translations_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._translations_scroller__content.onmouseup = null;
			me._translations_scroller__content.onmousemove = null;
			me._translations_scroller__content.ontouchend = null;
			me._translations_scroller__content.ontouchmove = null;
			me._translations_scroller__content.onpointerup = null;
			me._translations_scroller__content.onpointermove = null;
			setTimeout(function() { me._translations_scroller.ggIsDragging = false; }, 100);
		}
		me._translations_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._translations_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._translations_scroller.ggDragStartY) > 10) me._translations_scroller.ggIsDragging = true;
			var diffX = (eventX - me._translations_scroller.ggDragLastX) * me._translations_scroller.ggHPercentVisible;
			var diffY = (eventY - me._translations_scroller.ggDragLastY) * me._translations_scroller.ggVPercentVisible;
			me._translations_scroller.ggDragInertiaX = -diffX;
			me._translations_scroller.ggDragInertiaY = -diffY;
			me._translations_scroller.ggDragLastX = eventX;
			me._translations_scroller.ggDragLastY = eventY;
			me._translations_scroller.ggScrollByX(-diffX);
			me._translations_scroller.ggScrollByY(-diffY);
		}
		me._translations_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._translations_scroller.ggDragLastX = me._translations_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._translations_scroller.ggDragLastY = me._translations_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._translations_scroller__content.onmouseup = me._translations_scroller__content.mousetouchend;
			me._translations_scroller__content.ontouchend = me._translations_scroller__content.mousetouchend;
			me._translations_scroller__content.onmousemove = me._translations_scroller__content.mousetouchmove;
			me._translations_scroller__content.ontouchmove = me._translations_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._translations_scroller__content.onpointerup = me._translations_scroller__content.ontouchend;
				me._translations_scroller__content.onpointermove = me._translations_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._translations_scroller__content.mousetouchstart;
		els.ontouchstart = me._translations_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._translations_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._translations_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 180px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._translations_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 180px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._translations_scroller.ggScrollPosX = 0;
		me._translations_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._translations_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._translations_scroller.ggDragInertiaX *= 0.96;
					me._translations_scroller.ggScrollByX(me._translations_scroller.ggDragInertiaX);
					if (Math.abs(me._translations_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._translations_scroller.ggDragLastX;
				me._translations_scroller.ggDragInertiaX = diffX;
				me._translations_scroller.ggDragLastX = e.clientX;
				me._translations_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._translations_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._translations_scroller.ggDragInertiaX *= 0.96;
					me._translations_scroller.ggScrollByX(me._translations_scroller.ggDragInertiaX);
					if (Math.abs(me._translations_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._translations_scroller.ggDragLastX;
				me._translations_scroller.ggDragInertiaX = diffX;
				me._translations_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._translations_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._translations_scroller.ggScrollWidth;
			if (e.offsetX < me._translations_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._translations_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._translations_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._translations_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._translations_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._translations_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._translations_scroller.ggScrollByXSmooth(30 * me._translations_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._translations_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 159px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._translations_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 159px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._translations_scroller.ggScrollPosY = 0;
		me._translations_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._translations_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._translations_scroller.ggDragInertiaY *= 0.96;
					me._translations_scroller.ggScrollByY(me._translations_scroller.ggDragInertiaY);
					if (Math.abs(me._translations_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._translations_scroller.ggDragLastY;
				me._translations_scroller.ggDragInertiaY = diffY;
				me._translations_scroller.ggDragLastY = e.clientY;
				me._translations_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._translations_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._translations_scroller.ggDragInertiaY *= 0.96;
					me._translations_scroller.ggScrollByY(me._translations_scroller.ggDragInertiaY);
					if (Math.abs(me._translations_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._translations_scroller.ggDragLastY;
				me._translations_scroller.ggDragInertiaY = diffY;
				me._translations_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._translations_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._translations_scroller.ggScrollHeight;
			if (e.offsetY < me._translations_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._translations_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._translations_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._translations_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._translations_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._translations_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._translations_scroller.ggScrollByYSmooth(30 * me._translations_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._translations_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="translations_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 40px);';
		hs+='left : 10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._translations_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._translations_scroller.ggScrollPosX / me._translations_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._translations_scroller.ggScrollPosY / me._translations_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._translations_scroller__horScrollBg.style.visibility = 'inherit';
					me._translations_scroller__horScrollFg.style.visibility = 'inherit';
					me._translations_scroller.ggHorScrollVisible = true;
				} else {
					me._translations_scroller__horScrollBg.style.visibility = 'hidden';
					me._translations_scroller__horScrollFg.style.visibility = 'hidden';
					me._translations_scroller.ggHorScrollVisible = false;
				}
				if ((me._translations_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._translations_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._translations_scroller__vertScrollBg.style.visibility = 'inherit';
					me._translations_scroller__vertScrollFg.style.visibility = 'inherit';
					me._translations_scroller.ggVertScrollVisible = true;
					if (!me._translations_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._translations_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._translations_scroller__horScrollBg.style.visibility = 'inherit';
						me._translations_scroller__horScrollFg.style.visibility = 'inherit';
						me._translations_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._translations_scroller__vertScrollBg.style.visibility = 'hidden';
					me._translations_scroller__vertScrollFg.style.visibility = 'hidden';
					me._translations_scroller.ggVertScrollVisible = false;
				}
				if(me._translations_scroller.ggHorScrollVisible) {
					me._translations_scroller.ggAvailableHeight = me._translations_scroller.clientHeight - 15;
					if (me._translations_scroller.ggVertScrollVisible) {
						me._translations_scroller.ggAvailableWidth = me._translations_scroller.clientWidth - 15;
						me._translations_scroller.ggAvailableWidthWithScale = me._translations_scroller.getBoundingClientRect().width - me._translations_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._translations_scroller.ggAvailableWidth = me._translations_scroller.clientWidth;
						me._translations_scroller.ggAvailableWidthWithScale = me._translations_scroller.getBoundingClientRect().width;
					}
					me._translations_scroller__horScrollBg.style.width = me._translations_scroller.ggAvailableWidth + 'px';
					me._translations_scroller.ggHPercentVisible = contentWidth != 0 ? me._translations_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._translations_scroller.ggHPercentVisible > 1.0) me._translations_scroller.ggHPercentVisible = 1.0;
					me._translations_scroller.ggScrollWidth = Math.round(me._translations_scroller__horScrollBg.offsetWidth * me._translations_scroller.ggHPercentVisible);
					me._translations_scroller__horScrollFg.style.width = me._translations_scroller.ggScrollWidth + 'px';
					me._translations_scroller.ggScrollPosX = me._translations_scroller.ggScrollPosXPercent * me._translations_scroller.ggAvailableWidth;
					me._translations_scroller.ggScrollPosX = Math.min(me._translations_scroller.ggScrollPosX, me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
					me._translations_scroller__horScrollFg.style.left = me._translations_scroller.ggScrollPosX + 'px';
					if (me._translations_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._translations_scroller.ggScrollPosX / (me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
						me._translations_scroller__content.style.left = -(Math.round((me._translations_scroller.ggContentWidth * (1.0 - me._translations_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._translations_scroller.ggAvailableHeight = me._translations_scroller.clientHeight;
					me._translations_scroller.ggScrollPosX = 0;
					me._translations_scroller.ggScrollPosXPercent = 0.0;
					me._translations_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._translations_scroller.ggVertScrollVisible) {
					me._translations_scroller.ggAvailableWidth = me._translations_scroller.clientWidth - 15;
					if (me._translations_scroller.ggHorScrollVisible) {
						me._translations_scroller.ggAvailableHeight = me._translations_scroller.clientHeight - 15;
						me._translations_scroller.ggAvailableHeightWithScale = me._translations_scroller.getBoundingClientRect().height - me._translations_scroller__vertScrollBg.getBoundingClientRect().width;
						me._translations_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._translations_scroller.ggAvailableHeight = me._translations_scroller.clientHeight;
						me._translations_scroller.ggAvailableHeightWithScale = me._translations_scroller.getBoundingClientRect().height;
						me._translations_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._translations_scroller__vertScrollBg.style.height = me._translations_scroller.ggAvailableHeight + 'px';
					me._translations_scroller.ggVPercentVisible = contentHeight != 0 ? me._translations_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._translations_scroller.ggVPercentVisible > 1.0) me._translations_scroller.ggVPercentVisible = 1.0;
					me._translations_scroller.ggScrollHeight =  Math.round(me._translations_scroller__vertScrollBg.offsetHeight * me._translations_scroller.ggVPercentVisible);
					me._translations_scroller__vertScrollFg.style.height = me._translations_scroller.ggScrollHeight + 'px';
					me._translations_scroller.ggScrollPosY = me._translations_scroller.ggScrollPosYPercent * me._translations_scroller.ggAvailableHeight;
					me._translations_scroller.ggScrollPosY = Math.min(me._translations_scroller.ggScrollPosY, me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
					me._translations_scroller__vertScrollFg.style.top = me._translations_scroller.ggScrollPosY + 'px';
					if (me._translations_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._translations_scroller.ggScrollPosY / (me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
						me._translations_scroller__content.style.top = -(Math.round((me._translations_scroller.ggContentHeight * (1.0 - me._translations_scroller.ggVPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._translations_scroller.ggAvailableWidth = me._translations_scroller.clientWidth;
					me._translations_scroller.ggScrollPosY = 0;
					me._translations_scroller.ggScrollPosYPercent = 0.0;
					me._translations_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._translations_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._translations_scroller.ggHorScrollVisible || vertScrollWasVisible != me._translations_scroller.ggVertScrollVisible) {
					skin.updateSize(me._translations_scroller);
					me._translations_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._translations_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._translations_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 180;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._translations_cloner.ggUpdating == true) return;
			me._translations_cloner.ggUpdating = true;
			var el=me._translations_cloner;
			var curNumCols = 0;
			curNumCols = me._translations_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && false) {
				me._translations_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._translations_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._translations_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._translations_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._translations_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._translations_cloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._translations_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_translations_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._translations_cloner.ggNodeCount = me._translations_cloner.ggNumFilterPassed;
			me._translations_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._translations_cloner.parentNode && me._translations_cloner.parentNode.classList.contains('ggskin_subelement') && me._translations_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._translations_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="translations_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._translations_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._translations_cloner.childNodes.length; i++) {
				var child=me._translations_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._translations_cloner.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me._translations_cloner.ggUpdate();
		}
		me._translations_scroller__content.appendChild(me._translations_cloner);
		me._translations_popup.appendChild(me._translations_scroller);
		me.divSkin.appendChild(me._translations_popup);
		el=me._video_hs_popup=document.createElement('div');
		el.ggId="video_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_hs_popup.style.transition='';
				if (me._video_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._video_hs_popup.style.visibility=(Number(me._video_hs_popup.style.opacity)>0||!me._video_hs_popup.style.opacity)?'inherit':'hidden';
					me._video_hs_popup.ggVisible=true;
				}
				else {
					me._video_hs_popup.style.visibility="hidden";
					me._video_hs_popup.ggVisible=false;
				}
			}
		}
		me._video_hs_popup.logicBlock_visible();
		me._video_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_hs_popup_close=document.createElement('div');
		els=me._video_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._video_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
		}
		me._video_hs_popup_close.onmouseenter=function (e) {
			me._video_hs_popup_close__img.style.visibility='hidden';
			me._video_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['video_hs_popup_close']=true;
		}
		me._video_hs_popup_close.onmouseleave=function (e) {
			me._video_hs_popup_close__img.style.visibility='inherit';
			me._video_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['video_hs_popup_close']=false;
		}
		me._video_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_hs_popup_close);
		el=me._video_youtube_hs_popup_vid=document.createElement('div');
		me._video_youtube_hs_popup_vid.seekbars = [];
			me._video_youtube_hs_popup_vid.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_youtube_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_youtube_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_youtube_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_youtube_hs_popup_vid.hasChildNodes()) {
				me._video_youtube_hs_popup_vid.removeChild(me._video_youtube_hs_popup_vid.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_youtube_hs_popup_vid.ggVideoNotLoaded == false && me._video_youtube_hs_popup_vid.ggDeactivate && player.isPlaying('video_youtube_hs_popup_vid')) { me._video_youtube_hs_popup_vid.ggDeactivate(); }
				me._video_youtube_hs_popup_vid.ggVideoNotLoaded = true;
				return;
			}
			me._video_youtube_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_youtube_hs_popup_vid__vid=document.createElement('iframe');
			me._video_youtube_hs_popup_vid__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_youtube_hs_popup_vid__vid.setAttribute('src', ggVideoUrl);
			me._video_youtube_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_youtube_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_youtube_hs_popup_vid__vid.setAttribute('allow', 'autoplay');
			me._video_youtube_hs_popup_vid__vid.setAttribute('allowfullscreen', 'true');
			me._video_youtube_hs_popup_vid__vid.setAttribute('style', 'border:none; ; ;');
			me._video_youtube_hs_popup_vid.appendChild(me._video_youtube_hs_popup_vid__vid);
			me._video_youtube_hs_popup_vid.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_youtube_hs_popup_vid.ggYoutubeApiReady();}
		}
		el.ggId="video_youtube_hs_popup_vid";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_youtube_hs_popup_vid.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_youtube_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_youtube_hs_popup_vid.style.transition='';
				if (me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_youtube_hs_popup_vid.style.visibility=(Number(me._video_youtube_hs_popup_vid.style.opacity)>0||!me._video_youtube_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_youtube_hs_popup_vid.ggVideoNotLoaded) {
						me._video_youtube_hs_popup_vid.ggInitMedia(me._video_youtube_hs_popup_vid.ggVideoSource);
					}
					me._video_youtube_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_youtube_hs_popup_vid.style.visibility="hidden";
					me._video_youtube_hs_popup_vid.ggInitMedia('');
					me._video_youtube_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_youtube_hs_popup_vid.logicBlock_visible();
		me._video_youtube_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_youtube_hs_popup_vid);
		el=me._video_vimeo_hs_popup_vid=document.createElement('div');
		me._video_vimeo_hs_popup_vid.seekbars = [];
		me._video_vimeo_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_vimeo_hs_popup_vid.hasChildNodes()) {
				me._video_vimeo_hs_popup_vid.removeChild(me._video_vimeo_hs_popup_vid.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_vimeo_hs_popup_vid.ggVideoNotLoaded == false && me._video_vimeo_hs_popup_vid.ggDeactivate && player.isPlaying('video_vimeo_hs_popup_vid')) { me._video_vimeo_hs_popup_vid.ggDeactivate(); }
				me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = true;
				return;
			}
			me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_vimeo_hs_popup_vid__vid=document.createElement('iframe');
			me._video_vimeo_hs_popup_vid__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._video_vimeo_hs_popup_vid__vid.setAttribute('src', ggVideoUrl);
			me._video_vimeo_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('allow', 'autoplay');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('allowfullscreen', 'true');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('style', 'border:none; ; ;');
			me._video_vimeo_hs_popup_vid.appendChild(me._video_vimeo_hs_popup_vid__vid);
			me._video_vimeo_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_vimeo_hs_popup_vid";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_vimeo_hs_popup_vid.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_vimeo_hs_popup_vid.style.transition='';
				if (me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_vimeo_hs_popup_vid.style.visibility=(Number(me._video_vimeo_hs_popup_vid.style.opacity)>0||!me._video_vimeo_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_vimeo_hs_popup_vid.ggVideoNotLoaded) {
						me._video_vimeo_hs_popup_vid.ggInitMedia(me._video_vimeo_hs_popup_vid.ggVideoSource);
					}
					me._video_vimeo_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_vimeo_hs_popup_vid.style.visibility="hidden";
					me._video_vimeo_hs_popup_vid.ggInitMedia('');
					me._video_vimeo_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_vimeo_hs_popup_vid.logicBlock_visible();
		me._video_vimeo_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_vimeo_hs_popup_vid);
		el=me._video_file_hs_popup_vid=document.createElement('div');
		me._video_file_hs_popup_vid.seekbars = [];
		me._video_file_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_hs_popup_vid.hasChildNodes()) {
				me._video_file_hs_popup_vid.removeChild(me._video_file_hs_popup_vid.lastChild);
			}
			if (me._video_file_hs_popup_vid__vid) {
				me._video_file_hs_popup_vid__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_hs_popup_vid.ggVideoNotLoaded == false && me._video_file_hs_popup_vid.ggDeactivate && player.isPlaying('video_file_hs_popup_vid')) { me._video_file_hs_popup_vid.ggDeactivate(); }
				me._video_file_hs_popup_vid.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_hs_popup_vid');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_file_hs_popup_vid__vid=document.createElement('video');
			me._video_file_hs_popup_vid__vid.className='ggskin ggskin_video';
			me._video_file_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_file_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_file_hs_popup_vid__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_hs_popup_vid__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_hs_popup_vid__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_hs_popup_vid__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_hs_popup_vid__vid.setAttribute('autoplay', '');
			me._video_file_hs_popup_vid__source=document.createElement('source');
			me._video_file_hs_popup_vid__source.setAttribute('src', media);
			me._video_file_hs_popup_vid__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_hs_popup_vid__vid.setAttribute('style', ';');
			me._video_file_hs_popup_vid__vid.style.outline = 'none';
			me._video_file_hs_popup_vid__vid.appendChild(me._video_file_hs_popup_vid__source);
			me._video_file_hs_popup_vid.appendChild(me._video_file_hs_popup_vid__vid);
			var videoEl = player.registerVideoElement('video_file_hs_popup_vid', me._video_file_hs_popup_vid__vid);
			player.changeVolume('video_file_hs_popup_vid', 0.0);
			notifySeekbars();
			if (me._video_file_hs_popup_vid.ggActivate) {
				me._video_file_hs_popup_vid__vid.addEventListener('play', me._video_file_hs_popup_vid.ggActivate);
			}
			if (me._video_file_hs_popup_vid.ggDeactivate) {
				me._video_file_hs_popup_vid__vid.addEventListener('ended', me._video_file_hs_popup_vid.ggDeactivate);
				me._video_file_hs_popup_vid__vid.addEventListener('pause', me._video_file_hs_popup_vid.ggDeactivate);
			}
			me._video_file_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_file_hs_popup_vid";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 150px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_hs_popup_vid.ggIsActive=function() {
			if (me._video_file_hs_popup_vid__vid != null) {
				return (me._video_file_hs_popup_vid__vid.paused == false && me._video_file_hs_popup_vid__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_hs_popup_vid.style.transition='';
				if (me._video_file_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_file_hs_popup_vid.style.visibility=(Number(me._video_file_hs_popup_vid.style.opacity)>0||!me._video_file_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_file_hs_popup_vid.ggVideoNotLoaded) {
						me._video_file_hs_popup_vid.ggInitMedia(me._video_file_hs_popup_vid.ggVideoSource);
					}
					me._video_file_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_file_hs_popup_vid.style.visibility="hidden";
					me._video_file_hs_popup_vid.ggInitMedia('');
					me._video_file_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_file_hs_popup_vid.logicBlock_visible();
		me._video_file_hs_popup_vid.onclick=function (e) {
			if (me._video_file_hs_popup_vid.ggApiPlayer) {
				if (me._video_file_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_hs_popup_vid.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_hs_popup_vid.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_hs_popup_vid.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_hs_popup_vid.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_hs_popup_vid.ggApiPlayer.play();
						} else {
							me._video_file_hs_popup_vid.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_hs_popup_vid","1");
			}
		}
		me._video_file_hs_popup_vid.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_hs_popup_play.style.transition='none';
			} else {
				me._video_file_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_hs_popup_play.style.opacity='0';
			me._video_file_hs_popup_play.style.visibility='hidden';
		}
		me._video_file_hs_popup_vid.ggDeactivate=function () {
			me._video_file_hs_popup_play.style.transition='none';
			me._video_file_hs_popup_play.style.opacity='1';
			me._video_file_hs_popup_play.style.visibility=me._video_file_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_file_hs_popup_vid);
		el=me._video_file_hs_popup_play=document.createElement('div');
		els=me._video_file_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_file_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_hs_popup_play";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_hs_popup_play.style.transition='';
				if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_hs_popup_play.style.visibility=(Number(me._video_file_hs_popup_play.style.opacity)>0||!me._video_file_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_file_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_file_hs_popup_play.style.visibility="hidden";
					me._video_file_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_file_hs_popup_play.logicBlock_visible();
		me._video_file_hs_popup_play.onclick=function (e) {
			if (me._video_file_hs_popup_vid.ggApiPlayer) {
				if (me._video_file_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_hs_popup_vid.ggApiPlayer.playVideo();
					};
					if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					me._video_file_hs_popup_vid.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_hs_popup_vid","1");
			}
		}
		me._video_file_hs_popup_play.onmouseenter=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='hidden';
			me._video_file_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_hs_popup_play']=true;
		}
		me._video_file_hs_popup_play.onmouseleave=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='inherit';
			me._video_file_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_hs_popup_play']=false;
		}
		me._video_file_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_file_hs_popup_play);
		el=me._video_url_hs_popup_vid=document.createElement('div');
		me._video_url_hs_popup_vid.seekbars = [];
		me._video_url_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_hs_popup_vid.hasChildNodes()) {
				me._video_url_hs_popup_vid.removeChild(me._video_url_hs_popup_vid.lastChild);
			}
			if (me._video_url_hs_popup_vid__vid) {
				me._video_url_hs_popup_vid__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_hs_popup_vid.ggVideoNotLoaded == false && me._video_url_hs_popup_vid.ggDeactivate && player.isPlaying('video_url_hs_popup_vid')) { me._video_url_hs_popup_vid.ggDeactivate(); }
				me._video_url_hs_popup_vid.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_hs_popup_vid');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_url_hs_popup_vid__vid=document.createElement('video');
			me._video_url_hs_popup_vid__vid.className='ggskin ggskin_video';
			me._video_url_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_url_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_url_hs_popup_vid__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_hs_popup_vid__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_hs_popup_vid__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_hs_popup_vid__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_hs_popup_vid__vid.setAttribute('autoplay', '');
			me._video_url_hs_popup_vid__source=document.createElement('source');
			me._video_url_hs_popup_vid__source.setAttribute('src', media);
			me._video_url_hs_popup_vid__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_hs_popup_vid__vid.setAttribute('style', ';');
			me._video_url_hs_popup_vid__vid.style.outline = 'none';
			me._video_url_hs_popup_vid__vid.appendChild(me._video_url_hs_popup_vid__source);
			me._video_url_hs_popup_vid.appendChild(me._video_url_hs_popup_vid__vid);
			var videoEl = player.registerVideoElement('video_url_hs_popup_vid', me._video_url_hs_popup_vid__vid);
			player.changeVolume('video_url_hs_popup_vid', 0.0);
			notifySeekbars();
			if (me._video_url_hs_popup_vid.ggActivate) {
				me._video_url_hs_popup_vid__vid.addEventListener('play', me._video_url_hs_popup_vid.ggActivate);
			}
			if (me._video_url_hs_popup_vid.ggDeactivate) {
				me._video_url_hs_popup_vid__vid.addEventListener('ended', me._video_url_hs_popup_vid.ggDeactivate);
				me._video_url_hs_popup_vid__vid.addEventListener('pause', me._video_url_hs_popup_vid.ggDeactivate);
			}
			me._video_url_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_url_hs_popup_vid";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 150px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_hs_popup_vid.ggIsActive=function() {
			if (me._video_url_hs_popup_vid__vid != null) {
				return (me._video_url_hs_popup_vid__vid.paused == false && me._video_url_hs_popup_vid__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_hs_popup_vid.style.transition='';
				if (me._video_url_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_url_hs_popup_vid.style.visibility=(Number(me._video_url_hs_popup_vid.style.opacity)>0||!me._video_url_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_url_hs_popup_vid.ggVideoNotLoaded) {
						me._video_url_hs_popup_vid.ggInitMedia(me._video_url_hs_popup_vid.ggVideoSource);
					}
					me._video_url_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_url_hs_popup_vid.style.visibility="hidden";
					me._video_url_hs_popup_vid.ggInitMedia('');
					me._video_url_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_url_hs_popup_vid.logicBlock_visible();
		me._video_url_hs_popup_vid.onclick=function (e) {
			if (me._video_url_hs_popup_vid.ggApiPlayer) {
				if (me._video_url_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_hs_popup_vid.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_hs_popup_vid.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_hs_popup_vid.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_hs_popup_vid.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_hs_popup_vid.ggApiPlayer.play();
						} else {
							me._video_url_hs_popup_vid.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_hs_popup_vid","1");
			}
		}
		me._video_url_hs_popup_vid.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_hs_popup_play.style.transition='none';
			} else {
				me._video_url_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_hs_popup_play.style.opacity='0';
			me._video_url_hs_popup_play.style.visibility='hidden';
		}
		me._video_url_hs_popup_vid.ggDeactivate=function () {
			me._video_url_hs_popup_play.style.transition='none';
			me._video_url_hs_popup_play.style.opacity='1';
			me._video_url_hs_popup_play.style.visibility=me._video_url_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_url_hs_popup_vid);
		el=me._video_url_hs_popup_play=document.createElement('div');
		els=me._video_url_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_url_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_hs_popup_play";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_hs_popup_play.style.transition='';
				if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_hs_popup_play.style.visibility=(Number(me._video_url_hs_popup_play.style.opacity)>0||!me._video_url_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_url_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_url_hs_popup_play.style.visibility="hidden";
					me._video_url_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_url_hs_popup_play.logicBlock_visible();
		me._video_url_hs_popup_play.onclick=function (e) {
			if (me._video_url_hs_popup_vid.ggApiPlayer) {
				if (me._video_url_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_hs_popup_vid.ggApiPlayer.playVideo();
					};
					if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					me._video_url_hs_popup_vid.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_hs_popup_vid","1");
			}
		}
		me._video_url_hs_popup_play.onmouseenter=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='hidden';
			me._video_url_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_hs_popup_play']=true;
		}
		me._video_url_hs_popup_play.onmouseleave=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='inherit';
			me._video_url_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_hs_popup_play']=false;
		}
		me._video_url_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_url_hs_popup_play);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.logicBlock_visible();
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar || e.target == me._video_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#282828';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-11px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(230,230,230,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._video_hs_popup.appendChild(me._video_controller);
		el=me._video_hs_popup_title=document.createElement('div');
		els=me._video_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="video_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._video_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._video_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._video_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_hs_popup_title);
		me.divSkin.appendChild(me._video_hs_popup);
		el=me._pdf_hs_popup=document.createElement('div');
		el.ggId="pdf_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_hs_popup.style.transition='';
				if (me._pdf_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._pdf_hs_popup.style.visibility=(Number(me._pdf_hs_popup.style.opacity)>0||!me._pdf_hs_popup.style.opacity)?'inherit':'hidden';
					me._pdf_hs_popup.ggVisible=true;
				}
				else {
					me._pdf_hs_popup.style.visibility="hidden";
					me._pdf_hs_popup.ggVisible=false;
				}
			}
		}
		me._pdf_hs_popup.logicBlock_visible();
		me._pdf_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_hs_popup_close=document.createElement('div');
		els=me._pdf_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._pdf_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pdf_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._pdf_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="pdf_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_pdf_hs_popup', false);
		}
		me._pdf_hs_popup_close.onmouseenter=function (e) {
			me._pdf_hs_popup_close__img.style.visibility='hidden';
			me._pdf_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['pdf_hs_popup_close']=true;
		}
		me._pdf_hs_popup_close.onmouseleave=function (e) {
			me._pdf_hs_popup_close__img.style.visibility='inherit';
			me._pdf_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['pdf_hs_popup_close']=false;
		}
		me._pdf_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_close);
		el=me._pdf_hs_popup_title=document.createElement('div');
		els=me._pdf_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._pdf_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_title);
		el=me._pdf_hs_popup_pdf=document.createElement('div');
		els=me._pdf_hs_popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_hs_popup_pdf__pdf.setAttribute('frameborder', '0');
		me._pdf_hs_popup_pdf__pdf.setAttribute('width', '100%');
		me._pdf_hs_popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_hs_popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_hs_popup_pdf.ggPdfSource == file) return;
				me._pdf_hs_popup_pdf.pdfNotLoaded = false;
				me._pdf_hs_popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._pdf_hs_popup_pdf.ggPdfSource.indexOf(':') != -1 || me._pdf_hs_popup_pdf.ggPdfSource.startsWith('/') || me._pdf_hs_popup_pdf.ggPdfSource.startsWith('./')) ? me._pdf_hs_popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_hs_popup_pdf.ggPdfSource;
				me._pdf_hs_popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_hs_popup_pdf__pdf.style.display = 'block';
			} else {
				me._pdf_hs_popup_pdf__pdf.setAttribute('src', '');
				me._pdf_hs_popup_pdf__pdf.style.display = 'none';
				me._pdf_hs_popup_pdf.pdfNotLoaded = true;
				me._pdf_hs_popup_pdf.ggPdfSource = '';
			}
		}
		me._pdf_hs_popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_hs_popup_pdf.ggInitPdf('');
		el.ggId="pdf_hs_popup_pdf";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 2px) / 2) + 26px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_pdf);
		me.divSkin.appendChild(me._pdf_hs_popup);
		el=me._image_hs_popup_fullscreen=document.createElement('div');
		el.ggId="image_hs_popup_fullscreen";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_hs_popup_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_hs_popup_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_hs_popup_fullscreen.style.transition='';
				if (me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._image_hs_popup_fullscreen.style.visibility=(Number(me._image_hs_popup_fullscreen.style.opacity)>0||!me._image_hs_popup_fullscreen.style.opacity)?'inherit':'hidden';
					me._image_hs_popup_fullscreen.ggVisible=true;
				}
				else {
					me._image_hs_popup_fullscreen.style.visibility="hidden";
					me._image_hs_popup_fullscreen.ggVisible=false;
				}
			}
		}
		me._image_hs_popup_fullscreen.logicBlock_visible();
		me._image_hs_popup_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup_fs_description=document.createElement('div');
		els=me._image_hs_popup_fs_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_fs_description";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 16px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_hs_popup_fs_description.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('image_hs_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_fs_description.ggUpdateText();
		player.addListener('varchanged_image_hs_description', function() {
			me._image_hs_popup_fs_description.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_fs_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_description.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_description);
		el=me._image_hs_popup_fs_img=document.createElement('div');
		els=me._image_hs_popup_fs_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_hs_popup_fs_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_hs_popup_fs_img.ggSubElement.setAttribute('alt', player._(me._image_hs_popup_fs_img.ggAltText));
			me._image_hs_popup_fs_img.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_hs_popup_fs_img.ggText_untranslated = img;
			me._image_hs_popup_fs_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_hs_popup_fs_img.ggSubElement.style.width = '0px';
			me._image_hs_popup_fs_img.ggSubElement.style.height = '0px';
			me._image_hs_popup_fs_img.ggSubElement.src='';
			me._image_hs_popup_fs_img.ggSubElement.src=me._image_hs_popup_fs_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_hs_popup_fs_img.ggText != player._(me._image_hs_popup_fs_img.ggText_untranslated)) {
				me._image_hs_popup_fs_img.ggText = player._(me._image_hs_popup_fs_img.ggText_untranslated);
				me._image_hs_popup_fs_img.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_hs_popup_fs_img";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 196px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fs_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_img.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('image_hs_description') == ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_hs_popup_fs_img.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_hs_popup_fs_img.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_hs_popup_fs_img.style.transition='width 0s, height 0s';
				if (me._image_hs_popup_fs_img.ggCurrentLogicStateSize == 0) {
					me._image_hs_popup_fs_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_fs_img.style.height='calc(100% - 116px)';
					me._image_hs_popup_fs_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_fs_img);
				}
				else {
					me._image_hs_popup_fs_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_fs_img.style.height='calc(100% - 196px)';
					me._image_hs_popup_fs_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_fs_img);
				}
			}
		}
		me._image_hs_popup_fs_img.logicBlock_size();
		me._image_hs_popup_fs_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_hs_popup_fs_img.clientWidth;
			var parentHeight = me._image_hs_popup_fs_img.clientHeight;
			var img = me._image_hs_popup_fs_img__img;
			var aspectRatioDiv = me._image_hs_popup_fs_img.clientWidth / me._image_hs_popup_fs_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_hs_popup_fs_img.ggScrollbars || currentWidth < me._image_hs_popup_fs_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_hs_popup_fs_img.scrollLeft=currentWidth / 2 - me._image_hs_popup_fs_img.clientWidth / 2;
			}
			if (!me._image_hs_popup_fs_img.ggScrollbars || currentHeight < me._image_hs_popup_fs_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_hs_popup_fs_img.scrollTop=currentHeight / 2 - me._image_hs_popup_fs_img.clientHeight / 2;
			}
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_img);
		el=me._image_hs_popup_fs_title=document.createElement('div');
		els=me._image_hs_popup_fs_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_fs_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_hs_popup_fs_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_fs_title.ggUpdateText();
		el.appendChild(els);
		me._image_hs_popup_fs_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_title);
		el=me._image_hs_popup_fs_close=document.createElement('div');
		els=me._image_hs_popup_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_hs_popup_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_close.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popup_full', false);
		}
		me._image_hs_popup_fs_close.onmouseenter=function (e) {
			me._image_hs_popup_fs_close__img.style.visibility='hidden';
			me._image_hs_popup_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_fs_close']=true;
		}
		me._image_hs_popup_fs_close.onmouseleave=function (e) {
			me._image_hs_popup_fs_close__img.style.visibility='inherit';
			me._image_hs_popup_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_fs_close']=false;
		}
		me._image_hs_popup_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_close);
		me.divSkin.appendChild(me._image_hs_popup_fullscreen);
		el=me._url_hs_popup=document.createElement('div');
		el.ggId="url_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_hs_popup.style.transition='';
				if (me._url_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._url_hs_popup.style.visibility=(Number(me._url_hs_popup.style.opacity)>0||!me._url_hs_popup.style.opacity)?'inherit':'hidden';
					me._url_hs_popup.ggVisible=true;
				}
				else {
					me._url_hs_popup.style.visibility="hidden";
					me._url_hs_popup.ggVisible=false;
				}
			}
		}
		me._url_hs_popup.logicBlock_visible();
		me._url_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_hs_popup_close=document.createElement('div');
		els=me._url_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._url_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._url_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._url_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="url_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_url_hs_popup', false);
		}
		me._url_hs_popup_close.onmouseenter=function (e) {
			me._url_hs_popup_close__img.style.visibility='hidden';
			me._url_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['url_hs_popup_close']=true;
		}
		me._url_hs_popup_close.onmouseleave=function (e) {
			me._url_hs_popup_close__img.style.visibility='inherit';
			me._url_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['url_hs_popup_close']=false;
		}
		me._url_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_close);
		el=me._url_hs_popup_title=document.createElement('div');
		els=me._url_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_title);
		el=me._url_hs_popup_iframe=document.createElement('div');
		els=me._url_hs_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_hs_popup_iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_hs_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_hs_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_hs_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_iframe);
		me.divSkin.appendChild(me._url_hs_popup);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup_phone=document.createElement('div');
		el.ggId="popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_phone.style.transition='';
				if (me._popup_phone.ggCurrentLogicStateVisible == 0) {
					me._popup_phone.style.visibility=(Number(me._popup_phone.style.opacity)>0||!me._popup_phone.style.opacity)?'inherit':'hidden';
					me._popup_phone.ggVisible=true;
				}
				else {
					me._popup_phone.style.visibility="hidden";
					me._popup_phone.ggVisible=false;
				}
			}
		}
		me._popup_phone.logicBlock_visible();
		me._popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		els=me._close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_popup', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_info', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me._close_popup_phone__img.style.visibility='hidden';
			me._close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['close_popup_phone']=true;
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me._close_popup_phone__img.style.visibility='inherit';
			me._close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['close_popup_phone']=false;
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._popup_phone.appendChild(me._info_popup_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._popup_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 50px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 50px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#282828';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-11px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(230,230,230,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._popup_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		els=me._video_file_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_file_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseenter=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='hidden';
			me._video_file_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_popup_phone_play']=true;
		}
		me._video_file_popup_phone_play.onmouseleave=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='inherit';
			me._video_file_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_popup_phone_play']=false;
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		els=me._video_url_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_url_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseenter=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='hidden';
			me._video_url_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_popup_phone_play']=true;
		}
		me._video_url_popup_phone_play.onmouseleave=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='inherit';
			me._video_url_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_popup_phone_play']=false;
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_url_popup_phone_play);
		me._safe_area_phone.appendChild(me._popup_phone);
		me.divSkin.appendChild(me._safe_area_phone);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px 10px 10px 10px;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_1.style.transition='width 0s, height 0s';
				if (me._rectangle_1.ggCurrentLogicStateSize == 0) {
					me._rectangle_1.style.width='125px';
					me._rectangle_1.style.height='25px';
					skin.updateSize(me._rectangle_1);
				}
				else {
					me._rectangle_1.style.width='500px';
					me._rectangle_1.style.height='100px';
					skin.updateSize(me._rectangle_1);
				}
			}
		}
		me._rectangle_1.logicBlock_size();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._motolux=document.createElement('div');
		els=me._motolux__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDYyLjQgMjc0LjM7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDYyLjQgMjc0LjMiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiNFMTBCMTc7fQoJLnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZmlsbDojZmZmZmZmO30KCS5zdDJ7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO2ZpbGw6I0UyMDYxMzt9Cjwvc3R5bGU+CiA8Zz4KICA8ZGVmcz4KICAgPHJlY3QgaGVpZ2h0PSIyNzQuMyIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTA2Mi40IiB4PSItMS4yIiB5PSItMC40Ii8+CiAgPC9kZWZzPgogIDxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgogICA8dXNlIHN0eWxlPSJvdmVyZmxv'+
			'dzp2aXNpYmxlOyIgeGxpbms6aHJlZj0iI1NWR0lEXzFfIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzM3LjMsMTkyLjRoLTQxLjljLTE4LjMsMC4xLTExLjUtMTYuNS0xMS41LTE2LjVsMzUuOC05Ni4xaDM1LjRsLTM0LjUsOTUuMmgzNC41ICAgQzc1NS4xLDE3NS4xLDc1MS41LDE5Mi40LDczNy4zLDE5Mi40Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTkyMS42LDE3MC43bC0yOS41LDIxLjdoLTUwLjJjLTE3LDAtMTcuMi05LjQtMTcuMi05LjRjLTUuNSwxMC4zLTIxLjMsOS40LTIxLjMsOS40SDc3NiAgIGMtMjYuOSwwLTE5LjktMTcuNC0xOS45LTE3LjRsMj'+
			'MtNjQuOWw0NywwbC0yMS44LDYwLjVsMjEuNiwwbDIzLjYtNjAuNGg0Ni4ybC0yMS45LDYwLjVMOTIxLjYsMTcwLjd6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyMi4yLDE5Mi40YzQxLjgsMCw0MC40LTI5LDQwLjQtMjljMC04LjctNC0xMS41LTQtMTEuNWwzNC4zLDBsNi4zLTE2LjlsLTczLDAgICBjLTQyLjYsMC4zLTQyLjksMzEuMS00Mi45LDMxLjFTNTgxLjQsMTkyLjIsNjIyLjIsMTkyLjQgTTU0Ny4yLDE3NmMwLjEtMC43LDkuMS0yMy41LDkuMS0yMy41YzE1LjcsMC4xLDIxLjgtOC40LDIxLjgtOC40ICAgYzUuMy04LjgtMC4zLTguOS0wLjMtOC45bC0xNi4xLDBsOC42LTIwLjJj'+
			'NS4zLTExLTYuOS0xMS02LjktMTFjLTEwLDAtMTEuNiw2LTExLjYsNmMtMTAuMywyNi4xLTMwLjksMjUtMzAuOSwyNWwtNTkuNywwICAgYy01MC4yLDAuNy00Ni4zLDMxLjItNDYuMywzMS4yYzIsMjUuOSwzOS45LDI2LjIsMzkuOSwyNi4yYzQwLjUtMC41LDM5LjMtMjkuMywzOS4zLTI5LjNjLTAuMi02LjUtMy41LTExLjMtMy41LTExLjNoMzMuOSAgIGwtNy43LDE3LjljLTEwLjMsMjIuNywxMC4yLDIyLjYsMTAuMiwyMi42aDQyYzAsMCwxMS45LDAuOCwxNS4yLTE2LjRoLTIuN0g1NDcuMnogTTQxNiwxNzZoLTMwLjJsMTYuOC00MS40ICAgYzguNC0yMS44LDIuMy0yNS04LjUtMjUuN2MtMC4xLD'+
			'AtMC4zLDAtMC40LDBjLTExLjMsMC4yLTE2LjMsNi4yLTE2LjMsNi4yTDM0NS42LDE0NmwxMy40LTMwLjZjMCwwLDguNS0yMi4xLTEwLjItMjMuNSAgIGMwLDAtOS40LTEuNi0yNS42LDE0LjhsLTI4LjcsMzFsMTQuMS0zNC42YzEwLTIzLjYtMi41LTIzLjEtMi41LTIzLjFoLTYyLjRsLTEyLjgsMjAuOWwzOS4yLDBjMCwwLDUuNC0wLjYsMy4yLDYgICBjMCwwLjEtMjkuNSw4NS42LTI5LjUsODUuNmgyMS41YzAsMCw1LjEsMC4yLDkuNS00LjdsNDUuOC01MS43bC0xNi4xLDM4LjNjLTcuNCwxNy42LDguOSwxOC4xLDguOSwxOC4xYzEzLjEsMC4xLDE5LTcsMTktNyAgIGwzNC4zLTM2LjZsLTcuMiwx'+
			'OC40Yy0xMC40LDI1LjMsNi44LDI1LjIsNi44LDI1LjJoMzQuM0M0MDAuNCwxOTIuNCw0MTMuNCwxOTMuMSw0MTYsMTc2IE00NjQuMiwxNDkuNmMwLjEsMCwwLjMsMCwwLjQsMCAgIGM2LjksMCwzLjksNy4yLDMuOSw3LjJsLTYuMSwxNi4xYy0zLjgsOS43LTEwLjYsNi4yLTEwLjYsNi4ybC01LjItMi40Yy01LjUtMi45LTIuMy04LjYtMi4zLTguNmw3LjUtMTYuMmMxLjEtMi40LDQuNC0yLjMsNC40LTIuMyAgIGg4LjRINDY0LjJ6IE02MjQuNiwxNDkuNmg4LjhjNi45LDAsMy45LDcuMiwzLjksNy4ybC02LjEsMTYuMWMtMy44LDkuNy0xMC42LDYuMy0xMC42LDYuM2wtNS4yLTIuNGMtNS41LTIuOS'+
			'0yLjMtOC42LTIuMy04LjYgICBsNy41LTE2LjJDNjIxLjcsMTQ5LjQsNjI0LjYsMTQ5LjYsNjI0LjYsMTQ5LjYiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODkzLjEsMTkyLjRsMzYsMGgyLjhjMCwwLDQuNiwwLjEsOC4zLTIuNmwyMy45LTE4LjNsMTMuNiwxOC40YzAsMCwxLjksMi41LDYuOCwyLjVoNDkuN2wtMzIuNy00Ny4xICAgbDQ2LjQtMzUuMWwtNDIuNSwwbC0xNy44LDEzLjNsLTEwLjMtMTMuM0g5MjJsMjguNiwzOS45TDg5My4xLDE5Mi40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02Ny40LDg1YzI2LjktNDMuNSw5NS4yLTQyLjgsMTI1LjgtNC45Yy01LjUsNy40LTEwLjYs'+
			'MTMuOC0xNi4zLDE4LjdDMTU2LDY1LjMsMTAxLjEsNTQuMiw2Ny40LDg1Ii8+CiAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTg4LjksMjA4LjFjMCwwLDUxLjgsMjIuMiw4OC45LTI4LjRjMCwwLDIyLjctMjcuOSw3LjItNjcuN2M1LjktNywxMS42LTE0LjYsMTYuNi0yMi4xICAgYzAsMCwyOC43LDQwLjQsMi45LDg3LjZjMCwwLTYuOCwxMy44LTIyLjYsMjZjLTE0LDEwLjktMzUuMiwxOS44LTYyLjMsMTUuNkMxMDQuMSwyMTYuNyw5Ny4xLDIxMi41LDg4LjksMjA4LjEiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjYuOCwxNjAuNmMwLDAsMi4xLDI3LjEsMjUuNywyNy40YzksMC4xLDIwLjktMi'+
			'41LDM2LjgtMTIuNmM1Ny44LTM2LjMsMTA5LjUtODYuMywxMzAtMTI5LjMgICBjMCwwLTQuMyw0NC0xMDQuMywxMjguMWMtNDIuOSwzNS45LTcyLDM4LTg0LjQsMzIuM2MtMTcuMy04LTcuMy0zNS4zLTQuOC00My40TDI2LjgsMTYwLjZ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE2Mi4zLDEwNC4xYy0wLjMtMC4zLTEuMS0wLjMtMi41LDAuOGwtMTAuMyw4LjJMMTQ3LDk4LjFjLTEuNC03LjgtNC4xLTctNy44LTQuNGMwLDAtMC4xLDAuMS0wLjIsMC4xICAgYy0zLjYsMi42LTQuMSw1LjktNC4xLDUuOWwtNC40LDE2LjNsLTEuNS0xMS40YzAsMC0wLjItOS42LTguMS0zLjdjMCwwLTMuNiwy'+
			'LjQtNS4zLDEwLjlsLTMuNCwxNS41bC0yLTEyLjYgICBjLTEuMi04LjYtNS4zLTUuMy01LjMtNS4zbC0yMC41LDE2LjRsLTAuMiw4LjdMOTcsMTI0LjJjMCwwLDEuNy0xLjYsMi4yLDAuN2MwLDAuMSw2LjgsMjkuNyw2LjgsMjkuN2w3LjEtNS43YzAsMCwxLjgtMS4yLDIuMy0zLjYgICBsNS0yNS4zbDIuMSwxNC4xYzEsNi41LDYuNCwyLjMsNi40LDIuM2M0LjUtMy42LDQuOS02LjgsNC45LTYuOGw0LjItMTguNGwxLjIsNi42YzEuNCw5LjcsNy4xLDQuNyw3LjEsNC43czE0LjItMTQuMiwxNS4yLTE2LjEgICBDMTYxLjQsMTA2LjQsMTYyLjYsMTA0LjUsMTYyLjMsMTA0LjEiLz4KICA8cGF0aCBjbG'+
			'Fzcz0ic3QyIiBkPSJNNzMuMSwxMzYuM2MwLTMzLjcsMjIuNi02MS41LDYwLjgtNjEuNWMzLDAsNS45LDAuMiw4LjgsMC41QzY4LjcsNTEuMywyMi4zLDEyOC42LDYxLjMsMTgyLjUgICBjNS45LTAuOCwxOC45LTYuNywyMi44LTkuNUM3Ni45LDE2Mi44LDczLjEsMTUwLjIsNzMuMSwxMzYuMyIvPgogIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMzQuOSwxOTdjLTEzLjQsMC0yNC4yLTIuOS0zMy41LTguN2MtNSw0LjMtMTEuNyw4LjMtMTkuNSwxMi4yYzkuNiw1LjcsMjAuNSw4LjYsMzMuNCw4LjYgICBjMTguNSwwLDM1LjQtNi42LDQ4LjItMTcuNUMxNTQuOCwxOTUsMTQ1LjEsMTk3LDEzNC45LDE5'+
			'NyIvPgogPC9nPgo8L3N2Zz4K';
		me._motolux__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px 10px 10px 10px;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="motolux";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._motolux.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._motolux.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._motolux.ggCurrentLogicStateSize != newLogicStateSize) {
				me._motolux.ggCurrentLogicStateSize = newLogicStateSize;
				me._motolux.style.transition='width 0s, height 0s';
				if (me._motolux.ggCurrentLogicStateSize == 0) {
					me._motolux.style.width='125px';
					me._motolux.style.height='25px';
					skin.updateSize(me._motolux);
				}
				else {
					me._motolux.style.width='500px';
					me._motolux.style.height='100px';
					skin.updateSize(me._motolux);
				}
			}
		}
		me._motolux.logicBlock_size();
		me._motolux.onclick=function (e) {
			player.openUrl("https:\/\/motolux.com.tr\/urun\/alf-pro\/","");
		}
		me._motolux.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._motolux);
		me.divSkin.appendChild(me._rectangle_1);
		me._container_controls.logicBlock_visible();
		me._cr_fullscreen.logicBlock_visible();
		me._cr_fs_exit.logicBlock_visible();
		me.elementMouseOver['cr_fs_exit']=false;
		me._cr_fs_enter.logicBlock_visible();
		me.elementMouseOver['cr_fs_enter']=false;
		me._cr_translations.logicBlock_visible();
		me.elementMouseOver['cr_translations']=false;
		me._cr_move_rotate_mode.logicBlock_visible();
		me._cr_rotate_mode.logicBlock_visible();
		me.elementMouseOver['cr_rotate_mode']=false;
		me._cr_move_mode.logicBlock_visible();
		me.elementMouseOver['cr_move_mode']=false;
		me._cr_reset_zoom.logicBlock_visible();
		me._cr_reset_zoom_on.logicBlock_visible();
		me.elementMouseOver['cr_reset_zoom_on']=false;
		me._cr_reset_zoom_off.logicBlock_visible();
		me._toggle_controls_right.logicBlock_angle();
		me.elementMouseOver['toggle_controls_right']=false;
		me._container_controls_left.logicBlock_position();
		me._container_controls_left.logicBlock_visible();
		me._cl_info.logicBlock_visible();
		me.elementMouseOver['cl_info']=false;
		me._cl_info_active.logicBlock_visible();
		me._cl_share.logicBlock_visible();
		me.elementMouseOver['cl_share']=false;
		me._cl_share_active.logicBlock_visible();
		me._toggle_controls_left.logicBlock_angle();
		me.elementMouseOver['toggle_controls_left']=false;
		me._controller.logicBlock_visible();
		me._controller_zoom_bg.logicBlock_visible();
		me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_zoom_in_bg']=false;
		me._controller_zoom_in_enabled.logicBlock_visible();
		me.elementMouseOver['controller_zoom_in_enabled']=false;
		me._controller_zoom_in_disabled.logicBlock_visible();
		me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_zoom_out_bg']=false;
		me._controller_zoom_out_enabled.logicBlock_visible();
		me.elementMouseOver['controller_zoom_out_enabled']=false;
		me._controller_zoom_out_disabled.logicBlock_visible();
		me._controller_move_container_singlerow.logicBlock_visible();
		me._controller_move_right_singlerow.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_right_singlerow']=false;
		me._controller_move_right_sr_icon.logicBlock_visible();
		me._controller_move_right_sr_hover_icon.logicBlock_visible();
		me._controller_move_right_sr_disabled_icon.logicBlock_visible();
		me._controller_move_left_singlerow.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_left_singlerow']=false;
		me._controller_move_left_sr_icon.logicBlock_visible();
		me._controller_move_left_sr_hover_icon.logicBlock_visible();
		me._controller_move_left_sr_disabled_icon.logicBlock_visible();
		me._controller_move_container.logicBlock_visible();
		me._controller_move_left_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_left_bg']=false;
		me._controller_move_left_icon.logicBlock_visible();
		me._controller_move_left_hover_icon.logicBlock_visible();
		me._controller_move_left_disabled_icon.logicBlock_visible();
		me._controller_move_down_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_down_bg']=false;
		me._controller_move_down_icon.logicBlock_visible();
		me._controller_move_down_hover_icon.logicBlock_visible();
		me._controller_move_down_disabled_icon.logicBlock_visible();
		me._controller_move_right_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_right_bg']=false;
		me._controller_move_right_icon.logicBlock_visible();
		me._controller_move_right_hover_icon.logicBlock_visible();
		me._controller_move_right_disabled_icon.logicBlock_visible();
		me._controller_move_up_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_up_bg']=false;
		me._controller_move_up_icon.logicBlock_visible();
		me._controller_move_up_hover_icon.logicBlock_visible();
		me._controller_move_up_disabled_icon.logicBlock_visible();
		me._share.logicBlock_position();
		me._share.logicBlock_visible();
		me._copy.logicBlock_visible();
		me.elementMouseOver['copy']=false;
		me._twitter.logicBlock_visible();
		me.elementMouseOver['twitter']=false;
		me._facebook.logicBlock_visible();
		me.elementMouseOver['facebook']=false;
		me.elementMouseOver['share_close']=false;
		me._info.logicBlock_visible();
		me.elementMouseOver['info_close']=false;
		me._background_blur.logicBlock_visible();
		me._translations_popup.logicBlock_visible();
		me.elementMouseOver['translations_popup_close']=false;
		me._video_hs_popup.logicBlock_visible();
		me.elementMouseOver['video_hs_popup_close']=false;
		me._video_youtube_hs_popup_vid.logicBlock_visible();
		me._video_youtube_hs_popup_vid.ggVideoSource = '';
		me._video_youtube_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_vimeo_hs_popup_vid.logicBlock_visible();
		me._video_vimeo_hs_popup_vid.ggVideoSource = '';
		me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_file_hs_popup_vid.logicBlock_visible();
		me._video_file_hs_popup_vid.ggVideoSource = 'media/';
		me._video_file_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_file_hs_popup_play.logicBlock_visible();
		me.elementMouseOver['video_file_hs_popup_play']=false;
		me._video_url_hs_popup_vid.logicBlock_visible();
		me._video_url_hs_popup_vid.ggVideoSource = 'media/';
		me._video_url_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_url_hs_popup_play.logicBlock_visible();
		me.elementMouseOver['video_url_hs_popup_play']=false;
		me._video_controller.logicBlock_visible();
		me._pdf_hs_popup.logicBlock_visible();
		me.elementMouseOver['pdf_hs_popup_close']=false;
		me._image_hs_popup_fullscreen.logicBlock_visible();
		me._image_hs_popup_fs_img.logicBlock_size();
		me.elementMouseOver['image_hs_popup_fs_close']=false;
		me._url_hs_popup.logicBlock_visible();
		me.elementMouseOver['url_hs_popup_close']=false;
		el = me._local_fonts;
		;
		me._popup_phone.logicBlock_visible();
		me.elementMouseOver['close_popup_phone']=false;
		me._info_popup_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_file_popup_phone_play']=false;
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_url_popup_phone_play']=false;
		me._rectangle_1.logicBlock_size();
		me._motolux.logicBlock_size();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			me._variable_num_buttons_left.logicBlock();
			me._container_controls_left.logicBlock_position();
			me._cl_info.logicBlock_visible();
			me._info.logicBlock_visible();
		});
		player.addListener('autorotatechanged', function(event) {
			me._cr_rotate_mode.logicBlock_visible();
			me._cr_move_mode.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			me._variable_opt_share.logicBlock();
			me._variable_num_buttons_left.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._container_controls.logicBlock_visible();
			me._cr_fullscreen.logicBlock_visible();
			me._cr_move_rotate_mode.logicBlock_visible();
			me._toggle_controls_right.logicBlock_angle();
			me._container_controls_left.logicBlock_position();
			me._container_controls_left.logicBlock_visible();
			me._cl_info.logicBlock_visible();
			me._cl_info_active.logicBlock_visible();
			me._cl_share.logicBlock_visible();
			me._cl_share_active.logicBlock_visible();
			me._toggle_controls_left.logicBlock_angle();
			me._controller.logicBlock_visible();
			me._share.logicBlock_position();
			me._share.logicBlock_visible();
			me._copy.logicBlock_visible();
			me._twitter.logicBlock_visible();
			me._facebook.logicBlock_visible();
			me._info.logicBlock_visible();
			me._background_blur.logicBlock_visible();
			me._translations_popup.logicBlock_visible();
			me._translations_cloner.ggUpdateConditionNodeChange();
			me._video_hs_popup.logicBlock_visible();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._pdf_hs_popup.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
			me._image_hs_popup_fs_img.logicBlock_size();
			me._url_hs_popup.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			me._variable_opt_share.logicBlock();
			me._variable_num_buttons_left.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._container_controls.logicBlock_visible();
			if (player.transitionsDisabled) {
				me._container_controls.style.transition='none';
			} else {
				me._container_controls.style.transition='all 300ms ease-out 1000ms';
			}
			me._container_controls.style.opacity='1';
			me._container_controls.style.visibility=me._container_controls.ggVisible?'inherit':'hidden';
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_controls_right', false);
			}
			me._cr_fullscreen.logicBlock_visible();
			me._cr_translations.logicBlock_visible();
			me._cr_move_rotate_mode.logicBlock_visible();
			me._cr_rotate_mode.logicBlock_visible();
			me._cr_move_mode.logicBlock_visible();
			me._cr_reset_zoom.logicBlock_visible();
			me._toggle_controls_right.logicBlock_angle();
			me._container_controls_left.logicBlock_position();
			me._container_controls_left.logicBlock_visible();
			me._cl_info.logicBlock_visible();
			me._cl_info_active.logicBlock_visible();
			me._cl_share.logicBlock_visible();
			me._cl_share_active.logicBlock_visible();
			me._toggle_controls_left.logicBlock_angle();
			me._controller.logicBlock_visible();
			me._controller_zoom_bg.logicBlock_visible();
			me._controller_move_container_singlerow.logicBlock_visible();
			me._controller_move_container.logicBlock_visible();
			me._share.logicBlock_position();
			me._share.logicBlock_visible();
			player.setVariableValue('pos_share_buttons', Number("8.00"));
			if (
				(
					((player.getVariableValue('opt_share_facebook') == true))
				)
			) {
				player.setVariableValue('pos_share_buttons', player.getVariableValue('pos_share_buttons') + Number("32.00"));
			}
			me._twitter.style.transition='none';
			me._twitter.ggParameter.rx=player.getVariableValue('pos_share_buttons', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._twitter.ggParameter.ry=0;
			me._twitter.style.transform=parameterToTransform(me._twitter.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share_twitter') == true))
				)
			) {
				player.setVariableValue('pos_share_buttons', player.getVariableValue('pos_share_buttons') + Number("32.00"));
			}
			me._copy.style.transition='none';
			me._copy.ggParameter.rx=player.getVariableValue('pos_share_buttons', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._copy.ggParameter.ry=0;
			me._copy.style.transform=parameterToTransform(me._copy.ggParameter);
			me._copy.logicBlock_visible();
			me._twitter.logicBlock_visible();
			me._facebook.logicBlock_visible();
			me._info.logicBlock_visible();
			me._background_blur.logicBlock_visible();
			me._translations_popup.logicBlock_visible();
			me._translations_scroller.ggUpdatePosition();
			me._translations_cloner.ggTranslations = player.getProjectTranslations();
			me._translations_cloner.ggUpdate();
			me._video_hs_popup.logicBlock_visible();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._pdf_hs_popup.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
			me._image_hs_popup_fs_img.logicBlock_size();
			me._url_hs_popup.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._cr_fs_exit.logicBlock_visible();
			me._cr_fs_enter.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._cr_fs_exit.logicBlock_visible();
			me._cr_fs_enter.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			me._controller.logicBlock_visible();
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('width_controls_right', Number("50.00"));
			me._cr_reset_zoom.style.transition='none';
			me._cr_reset_zoom.ggParameter.rx=player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cr_reset_zoom.ggParameter.ry=0;
			me._cr_reset_zoom.style.transform=parameterToTransform(me._cr_reset_zoom.ggParameter);
			if (
				(
					((player.getHasZoom() == true))
				)
			) {
				player.setVariableValue('width_controls_right', player.getVariableValue('width_controls_right') + Number("32.00"));
			}
			me._cr_move_rotate_mode.style.transition='none';
			me._cr_move_rotate_mode.ggParameter.rx=player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cr_move_rotate_mode.ggParameter.ry=0;
			me._cr_move_rotate_mode.style.transform=parameterToTransform(me._cr_move_rotate_mode.ggParameter);
			if (
				(
					((player.getVariableValue('opt_move_rotate_mode') == true)) && 
					((player.getHasZoom() == true))
				)
			) {
				player.setVariableValue('width_controls_right', player.getVariableValue('width_controls_right') + Number("32.00"));
			}
			me._cr_translations.style.transition='none';
			me._cr_translations.ggParameter.rx=player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cr_translations.ggParameter.ry=0;
			me._cr_translations.style.transform=parameterToTransform(me._cr_translations.ggParameter);
			if (
				(
					((player.getProjectTranslations().length > 1))
				)
			) {
				player.setVariableValue('width_controls_right', player.getVariableValue('width_controls_right') + Number("32.00"));
			}
			me._cr_fullscreen.style.transition='none';
			me._cr_fullscreen.ggParameter.rx=player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cr_fullscreen.ggParameter.ry=0;
			me._cr_fullscreen.style.transform=parameterToTransform(me._cr_fullscreen.ggParameter);
			if (
				(
					((player.getVariableValue('has_fullscreen') == true)) && 
					((player.getVariableValue('opt_fullscreen') == true))
				)
			) {
				player.setVariableValue('width_controls_right', player.getVariableValue('width_controls_right') + Number("32.00"));
			}
			me._controls_right.style.transition='none';
			me._controls_right.style.width = '' + player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
			me._controls_right.style.height = '36px';
			me._controls_right.ggUpdatePosition();
			skin.updateSize(me._controls_right);
			player.setVariableValue('width_controls_right', player.getVariableValue('width_controls_right') - Number("34.00"));
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_controls_right') == false))
				)
			) {
				me._controls_right.style.transition='none';
				me._controls_right.ggParameter.rx=player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._controls_right.ggParameter.ry=0;
				me._controls_right.style.transform=parameterToTransform(me._controls_right.ggParameter);
			}
			if (
				(
					((player.getVariableValue('vis_controls_right') == false))
				)
			) {
				me._controls_right.style.transition='none';
				me._controls_right.ggParameter.rx=player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._controls_right.ggParameter.ry=0;
				me._controls_right.style.transform=parameterToTransform(me._controls_right.ggParameter);
			}
			player.setVariableValue('width_controls_left', Number("-45.00"));
			me._cl_share.style.transition='none';
			me._cl_share.ggParameter.rx=player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cl_share.ggParameter.ry=0;
			me._cl_share.style.transform=parameterToTransform(me._cl_share.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share') == true))
				)
			) {
				player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') - Number("32.00"));
			}
			me._cl_info.style.transition='none';
			me._cl_info.ggParameter.rx=player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cl_info.ggParameter.ry=0;
			me._cl_info.style.transform=parameterToTransform(me._cl_info.ggParameter);
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') - Number("32.00"));
			}
			player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') + Number("5.00"));
			player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') * Number("-1.00"));
		});
		player.addListener('positionchanged', function(event) {
			me._cr_reset_zoom_on.logicBlock_visible();
			me._cr_reset_zoom_off.logicBlock_visible();
			me._controller_zoom_in_bg.logicBlock_backgroundcolor();
			me._controller_zoom_in_enabled.logicBlock_visible();
			me._controller_zoom_in_disabled.logicBlock_visible();
			me._controller_zoom_out_bg.logicBlock_backgroundcolor();
			me._controller_zoom_out_enabled.logicBlock_visible();
			me._controller_zoom_out_disabled.logicBlock_visible();
			me._controller_move_right_singlerow.logicBlock_backgroundcolor();
			me._controller_move_right_sr_icon.logicBlock_visible();
			me._controller_move_right_sr_hover_icon.logicBlock_visible();
			me._controller_move_right_sr_disabled_icon.logicBlock_visible();
			me._controller_move_left_singlerow.logicBlock_backgroundcolor();
			me._controller_move_left_sr_icon.logicBlock_visible();
			me._controller_move_left_sr_hover_icon.logicBlock_visible();
			me._controller_move_left_sr_disabled_icon.logicBlock_visible();
			me._controller_move_left_bg.logicBlock_backgroundcolor();
			me._controller_move_left_icon.logicBlock_visible();
			me._controller_move_left_hover_icon.logicBlock_visible();
			me._controller_move_left_disabled_icon.logicBlock_visible();
			me._controller_move_down_bg.logicBlock_backgroundcolor();
			me._controller_move_down_icon.logicBlock_visible();
			me._controller_move_down_hover_icon.logicBlock_visible();
			me._controller_move_down_disabled_icon.logicBlock_visible();
			me._controller_move_right_bg.logicBlock_backgroundcolor();
			me._controller_move_right_icon.logicBlock_visible();
			me._controller_move_right_hover_icon.logicBlock_visible();
			me._controller_move_right_disabled_icon.logicBlock_visible();
			me._controller_move_up_bg.logicBlock_backgroundcolor();
			me._controller_move_up_icon.logicBlock_visible();
			me._controller_move_up_hover_icon.logicBlock_visible();
			me._controller_move_up_disabled_icon.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._rectangle_1.logicBlock_size();
			me._motolux.logicBlock_size();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._cr_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_image_hs_description', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_image_hs_description();
				}
			}
			me._image_hs_popup_fs_img.logicBlock_size();
		});
		player.addListener('varchanged_num_buttons_left', function(event) {
			me._variable_vis_controls_left.logicBlock();
			me._container_controls_left.logicBlock_visible();
		});
		player.addListener('varchanged_opt_controller', function(event) {
			me._controller.logicBlock_visible();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._cr_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_opt_move_rotate_mode', function(event) {
			me._cr_move_rotate_mode.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share', function(event) {
			me._variable_num_buttons_left.logicBlock();
			me._cl_share.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
			me._copy.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
			me._facebook.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
			me._twitter.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._variable_vis_controls_left.logicBlock();
			me._controller.logicBlock_visible();
			me._share.logicBlock_position();
		});
		player.addListener('varchanged_vis_controls_left', function(event) {
			me._container_controls_left.logicBlock_position();
			if (
				(
					((player.getVariableValue('vis_controls_left') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_left_visibility.style.transition='none';
				} else {
					me._controls_left_visibility.style.transition='all 200ms ease-out 0ms';
				}
				me._controls_left_visibility.style.opacity='1';
				me._controls_left_visibility.style.visibility=me._controls_left_visibility.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_controls_left') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_left_visibility.style.transition='none';
				} else {
					me._controls_left_visibility.style.transition='all 200ms ease-out 1000ms';
				}
				me._controls_left_visibility.style.opacity='0';
				me._controls_left_visibility.style.visibility='hidden';
			}
			me._toggle_controls_left.logicBlock_angle();
		});
		player.addListener('varchanged_vis_controls_right', function(event) {
			if (
				(
					((player.getVariableValue('vis_controls_right') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_right.style.transition='none';
				} else {
					me._controls_right.style.transition='all 1000ms ease 0ms';
				}
				me._controls_right.ggParameter.rx=0;me._controls_right.ggParameter.ry=0;
				me._controls_right.style.transform=parameterToTransform(me._controls_right.ggParameter);
			}
			if (
				(
					((player.getVariableValue('vis_controls_right') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_right.style.transition='none';
				} else {
					me._controls_right.style.transition='all 1000ms ease 0ms';
				}
				me._controls_right.ggParameter.rx=player.getVariableValue('width_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._controls_right.ggParameter.ry=0;
				me._controls_right.style.transform=parameterToTransform(me._controls_right.ggParameter);
			}
			if (
				(
					((player.getVariableValue('vis_controls_right') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_right_visibility.style.transition='none';
				} else {
					me._controls_right_visibility.style.transition='all 200ms ease-out 0ms';
				}
				me._controls_right_visibility.style.opacity='1';
				me._controls_right_visibility.style.visibility=me._controls_right_visibility.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_controls_right') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_right_visibility.style.transition='none';
				} else {
					me._controls_right_visibility.style.transition='all 200ms ease-out 1000ms';
				}
				me._controls_right_visibility.style.opacity='0';
				me._controls_right_visibility.style.visibility='hidden';
			}
			me._toggle_controls_right.logicBlock_angle();
		});
		player.addListener('varchanged_vis_image_hs_popup_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_hs_popups', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_image_hs_popups();
				}
			}
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._container_controls_left.logicBlock_position();
			me._cl_info_active.logicBlock_visible();
			me._info.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info_hs_popups', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_info_hs_popups();
				}
			}
		});
		player.addListener('varchanged_vis_pdf_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._pdf_hs_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._cl_info_active.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_popup', function(event) {
			me._popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_share', function(event) {
			me._container_controls_left.logicBlock_position();
			me._cl_share_active.logicBlock_visible();
			me._share.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._container_controls.logicBlock_visible();
		});
		player.addListener('varchanged_vis_translations', function(event) {
			me._translations_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._url_hs_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_file_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._video_hs_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_url_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_vimeo_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_youtube_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
		});
		player.addListener('varchanged_width_controls_left', function(event) {
			me._container_controls_left.logicBlock_position();
		});
		player.addListener('viewerinit', function(event) {
			me._translations_cloner.ggUpdate();
		});
	};
	function SkinCloner_translations_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.userdata;
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='100px';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._translation_item=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._translation_item;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._translation_item__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="translation_item";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._translation_item.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._translation_item.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._translation_item.ggUpdateText();
		});
		el.appendChild(els);
		me._translation_item.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._translation_item.onclick=function (e) {
			if (me._translation_item.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_translations', false);
		}
		me._translation_item.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._translation_item);
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 184px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),"_blank");
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_hs_popup_title.ggUpdateText();
				skin._url_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_hs_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_hs_popup_iframe.ggUpdateText();
				skin._url_hs_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._ht_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_title=document.createElement('div');
		els=me._ht_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_title.style.transition='';
				if (me._ht_url_title.ggCurrentLogicStateVisible == 0) {
					me._ht_url_title.style.visibility=(Number(me._ht_url_title.style.opacity)>0||!me._ht_url_title.style.opacity)?'inherit':'hidden';
					me._ht_url_title.ggVisible=true;
				}
				else {
					me._ht_url_title.style.visibility="hidden";
					me._ht_url_title.ggVisible=false;
				}
			}
		}
		me._ht_url_title.logicBlock_visible();
		me._ht_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_title);
		el=me._ht_url_bg_shadow=document.createElement('div');
		els=me._ht_url_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_bg_shadow";
		el.ggDx=3;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg_shadow.style.transition='';
				if (me._ht_url_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg_shadow.style.visibility="hidden";
					me._ht_url_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_url_bg_shadow.style.visibility=(Number(me._ht_url_bg_shadow.style.opacity)>0||!me._ht_url_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_url_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_url_bg_shadow.logicBlock_visible();
		me._ht_url_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_bg_shadow);
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='background-color 0s';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_url_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_url_bg.style.transition='background-color 0s';
				if (me._ht_url_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_url_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_url_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_url_bg.logicBlock_backgroundcolor();
		me._ht_url_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_url_bg']=true;
			me._ht_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_url_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_url_bg']=false;
			me._ht_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGVsbGlwc2UgY3g9IjMyIiBjeT0iMzIiIHJ4PSI4LjYyIiByeT0iMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMz'+
			'IiIHI9IjE2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSIxNiIgeDI9IjQ4IiB5MT0iMzIiIHkyPSIzMiIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjMyIiB4Mj0iMzIiIHkxPSIxNiIgeTI9IjQ4Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMzIiIGN5PSIzMiIgcng9IjguNiIgcnk9IjE2Ii8+CiAgPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMzIiIGN5PSIzMiIgcj0iMTYiLz4KICA8bGluZSBj'+
			'bGFzcz0ic3QxIiB4MT0iMTYiIHgyPSI0OCIgeTE9IjMyIiB5Mj0iMzIiLz4KICA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzIiIHgyPSIzMiIgeTE9IjE2IiB5Mj0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.onmouseenter=function (e) {
			me._ht_url_icon__img.style.visibility='hidden';
			me._ht_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_url_icon']=true;
		}
		me._ht_url_icon.onmouseleave=function (e) {
			me._ht_url_icon__img.style.visibility='inherit';
			me._ht_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_url_icon']=false;
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_icon);
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.logicBlock_visible();
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me._ht_url.logicBlock_visible();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_title.logicBlock_visible();
		me._ht_url_bg_shadow.logicBlock_visible();
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_url_bg']=false;
		me.elementMouseOver['ht_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg_shadow.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg_shadow.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg_shadow.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 404px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup=document.createElement('div');
		el.ggId="image_hs_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 18px;';
		hs+='bottom : -330px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((300px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_hs_popup.style.transition='';
				if (me._image_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._image_hs_popup.style.visibility=(Number(me._image_hs_popup.style.opacity)>0||!me._image_hs_popup.style.opacity)?'inherit':'hidden';
					me._image_hs_popup.ggVisible=true;
				}
				else {
					me._image_hs_popup.style.visibility="hidden";
					me._image_hs_popup.ggVisible=false;
				}
			}
		}
		me._image_hs_popup.logicBlock_visible();
		me._image_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup_description=document.createElement('div');
		els=me._image_hs_popup_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(25% - 32px);';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : calc(75% + 16px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_hs_popup_description.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('image_hs_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_description.ggUpdateText();
		player.addListener('varchanged_image_hs_description', function() {
			me._image_hs_popup_description.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_description.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_description);
		el=me._image_hs_popup_img=document.createElement('div');
		els=me._image_hs_popup_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_hs_popup_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_hs_popup_img.ggSubElement.setAttribute('alt', player._(me._image_hs_popup_img.ggAltText));
			me._image_hs_popup_img.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_hs_popup_img.ggText_untranslated = img;
			me._image_hs_popup_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_hs_popup_img.ggSubElement.style.width = '0px';
			me._image_hs_popup_img.ggSubElement.style.height = '0px';
			me._image_hs_popup_img.ggSubElement.src='';
			me._image_hs_popup_img.ggSubElement.src=me._image_hs_popup_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_hs_popup_img.ggText != player._(me._image_hs_popup_img.ggText_untranslated)) {
				me._image_hs_popup_img.ggText = player._(me._image_hs_popup_img.ggText_untranslated);
				me._image_hs_popup_img.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_hs_popup_img";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(75% - 64px);';
		hs+='left : calc(50% - ((calc(100% - 24px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_img.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('image_hs_description') == ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_hs_popup_img.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_hs_popup_img.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_hs_popup_img.style.transition='width 0s, height 0s';
				if (me._image_hs_popup_img.ggCurrentLogicStateSize == 0) {
					me._image_hs_popup_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_img.style.height='calc(100% - 96px)';
					me._image_hs_popup_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_img);
				}
				else {
					me._image_hs_popup_img.style.width='calc(100% - 24px)';
					me._image_hs_popup_img.style.height='calc(75% - 64px)';
					me._image_hs_popup_img.style.left = 'calc(50% - (calc(100% - 24px) / 2))';
					skin.updateSize(me._image_hs_popup_img);
				}
			}
		}
		me._image_hs_popup_img.logicBlock_size();
		me._image_hs_popup_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_hs_popup_img.clientWidth;
			var parentHeight = me._image_hs_popup_img.clientHeight;
			var img = me._image_hs_popup_img__img;
			var aspectRatioDiv = me._image_hs_popup_img.clientWidth / me._image_hs_popup_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_hs_popup_img.ggScrollbars || currentWidth < me._image_hs_popup_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_hs_popup_img.scrollLeft=currentWidth / 2 - me._image_hs_popup_img.clientWidth / 2;
			}
			if (!me._image_hs_popup_img.ggScrollbars || currentHeight < me._image_hs_popup_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_hs_popup_img.scrollTop=currentHeight / 2 - me._image_hs_popup_img.clientHeight / 2;
			}
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_img);
		el=me._image_hs_popup_title=document.createElement('div');
		els=me._image_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((calc(100% - 24px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._image_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_title);
		el=me._image_hs_popup_close=document.createElement('div');
		els=me._image_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
		}
		me._image_hs_popup_close.onmouseenter=function (e) {
			me._image_hs_popup_close__img.style.visibility='hidden';
			me._image_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_close']=true;
		}
		me._image_hs_popup_close.onmouseleave=function (e) {
			me._image_hs_popup_close__img.style.visibility='inherit';
			me._image_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_close']=false;
		}
		me._image_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_close);
		el=me._image_hs_popup_full=document.createElement('div');
		els=me._image_hs_popup_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHN0eWxlPSJmaW'+
			'xsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjM1Ljg5IiB4Mj0iNDgiIHkxPSIyOCIgeTI9IjE2Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeDE9IjI4LjExIiB4Mj0iMTYiIHkxPSIzNiIgeTI9IjQ4Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._image_hs_popup_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHgxPSIzNS44OSIgeDI9IjQ4IiB5MT0iMjgiIHkyPSIxNiIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHgxPSIyOC4xMSIgeDI9IjE2IiB5MT0iMzYiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_full.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
			player.setVariableValue('vis_image_hs_popup_full', true);
			skin._image_hs_popup_fs_img.ggSetImage(player._(me.hotspot.url));
				skin._image_hs_popup_fs_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_hs_popup_fs_title.ggUpdateText();
			skin._image_hs_popup_fs_title.ggTextDiv.scrollTop = 0;
		}
		me._image_hs_popup_full.onmouseenter=function (e) {
			me._image_hs_popup_full__img.style.visibility='hidden';
			me._image_hs_popup_full__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_full']=true;
		}
		me._image_hs_popup_full.onmouseleave=function (e) {
			me._image_hs_popup_full__img.style.visibility='inherit';
			me._image_hs_popup_full__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_full']=false;
		}
		me._image_hs_popup_full.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_full);
		me._ht_image.appendChild(me._image_hs_popup);
		el=me._ht_image_container=document.createElement('div');
		el.ggId="ht_image_container";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) == -1))
				)
			) {
				player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='1';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._image_hs_popup_img.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					me._image_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._image_hs_popup_title.ggUpdateText();
				me._image_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('image_hs_description', player._(me.hotspot.description));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
		}
		me._ht_image_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_image_container']=true;
			me._ht_image_title.logicBlock_visible();
		}
		me._ht_image_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_image_container']=false;
			me._ht_image_title.logicBlock_visible();
		}
		me._ht_image_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 32px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_image_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image_container'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_title.style.transition='';
				if (me._ht_image_title.ggCurrentLogicStateVisible == 0) {
					me._ht_image_title.style.visibility=(Number(me._ht_image_title.style.opacity)>0||!me._ht_image_title.style.opacity)?'inherit':'hidden';
					me._ht_image_title.ggVisible=true;
				}
				else {
					me._ht_image_title.style.visibility="hidden";
					me._ht_image_title.ggVisible=false;
				}
			}
		}
		me._ht_image_title.logicBlock_visible();
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_container.appendChild(me._ht_image_title);
		el=me._ht_image_bg_shadow=document.createElement('div');
		els=me._ht_image_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_bg_shadow";
		el.ggDx=3;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 12px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_bg_shadow.style.transition='';
				if (me._ht_image_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_image_bg_shadow.style.visibility="hidden";
					me._ht_image_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_image_bg_shadow.style.visibility=(Number(me._ht_image_bg_shadow.style.opacity)>0||!me._ht_image_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_image_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_image_bg_shadow.logicBlock_visible();
		me._ht_image_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_container.appendChild(me._ht_image_bg_shadow);
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 9px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_bg.style.transition='background-color 0s';
				if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_image_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_image_bg.logicBlock_backgroundcolor();
		me._ht_image_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_image_bg']=true;
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_image_bg']=false;
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTMyLDI4LjE3YTQsNCwwLDEsMS00LDQsNCw0LDAsMCwxLDQtNG0wLTRhOCw4LDAsMSwwLDgsOCw4LDgsMCwwLDAtOC04WiIgc3R5bGU9ImZpbGw6I2U2ZTZlNiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzcuMjMgMjIuMjIgMzUuOD'+
			'kgMTkuNDUgMjguMTEgMTkuNDUgMjYuNzcgMjIuMjIgMTYgMjIuMjIgMTYgNDMuNTUgNDggNDMuNTUgNDggMjIuMjIgMzcuMjMgMjIuMjIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsMjguMmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0cy00LTEuOC00LTRsMCwwQzI4LDMwLDI5LjgsMjgu'+
			'MiwzMiwyOC4yIE0zMiwyNC4yYy00LjQsMC04LDMuNi04LDggICBzMy42LDgsOCw4czgtMy42LDgtOFMzNi40LDI0LjIsMzIsMjQuMnoiLz4KICA8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjM3LjIsMjIuMiAzNS45LDE5LjUgMjguMSwxOS41IDI2LjgsMjIuMiAxNiwyMi4yIDE2LDQzLjUgNDgsNDMuNSA0OCwyMi4yICAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.onmouseenter=function (e) {
			me._ht_image_icon__img.style.visibility='hidden';
			me._ht_image_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon']=true;
		}
		me._ht_image_icon.onmouseleave=function (e) {
			me._ht_image_icon__img.style.visibility='inherit';
			me._ht_image_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon']=false;
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon);
		me._ht_image_container.appendChild(me._ht_image_bg);
		me._ht_image.appendChild(me._ht_image_container);
		el=me._ht_image_container_close=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_image_container_close";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_container_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_container_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_container_close.style.transition='';
				if (me._ht_image_container_close.ggCurrentLogicStateVisible == 0) {
					me._ht_image_container_close.style.visibility=(Number(me._ht_image_container_close.style.opacity)>0||!me._ht_image_container_close.style.opacity)?'inherit':'hidden';
					me._ht_image_container_close.ggVisible=true;
				}
				else {
					me._ht_image_container_close.style.visibility="hidden";
					me._ht_image_container_close.ggVisible=false;
				}
			}
		}
		me._ht_image_container_close.logicBlock_visible();
		me._ht_image_container_close.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
				)
			) {
				player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace("<"+me.hotspot.id+">", ''));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
			}
		}
		me._ht_image_container_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_container_close);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		me._image_hs_popup.logicBlock_visible();
		me._image_hs_popup_img.logicBlock_size();
		me.elementMouseOver['image_hs_popup_close']=false;
		me.elementMouseOver['image_hs_popup_full']=false;
		me.elementMouseOver['ht_image_container']=false;
		me._ht_image_title.logicBlock_visible();
		me._ht_image_bg_shadow.logicBlock_visible();
		me._ht_image_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_image_bg']=false;
		me.elementMouseOver['ht_image_icon']=false;
		me._ht_image_container_close.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_title.logicBlock_visible();
				me._ht_image_bg_shadow.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._image_hs_popup.logicBlock_visible();
				me._image_hs_popup_img.logicBlock_size();
				player.setVariableValue('vis_image_hs_popups', "");
				me._ht_image_title.logicBlock_visible();
				me._ht_image_bg_shadow.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._image_hs_popup.logicBlock_visible();
				me._image_hs_popup_img.logicBlock_size();
				me._ht_image_title.logicBlock_visible();
				me._ht_image_bg_shadow.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_image_hs_description=function() {
				me._image_hs_popup_img.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_image_hs_popups=function() {
				me._image_hs_popup.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 84px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup=document.createElement('div');
		el.ggId="info_hs_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 16px;';
		hs+='bottom : -330px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((300px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_info_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_hs_popup.style.transition='';
				if (me._info_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._info_hs_popup.style.visibility=(Number(me._info_hs_popup.style.opacity)>0||!me._info_hs_popup.style.opacity)?'inherit':'hidden';
					me._info_hs_popup.ggVisible=true;
				}
				else {
					me._info_hs_popup.style.visibility="hidden";
					me._info_hs_popup.ggVisible=false;
				}
			}
		}
		me._info_hs_popup.logicBlock_visible();
		me._info_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup_text=document.createElement('div');
		els=me._info_hs_popup_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_hs_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_hs_popup_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("<strong style=\'font-size: 18px;\'>%1<\/strong><br>\n<div>%2<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_hs_popup_text.ggUpdateText();
		player.addListener('configloaded', function() {
			me._info_hs_popup_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_hs_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_text.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup.appendChild(me._info_hs_popup_text);
		el=me._info_hs_popup_close=document.createElement('div');
		els=me._info_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMjAuNjkiIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KICA8bGluZSBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgxPSI0My4zMSIgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MT'+
			'A7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDE9IjIwLjY5IiB4Mj0iNDMuMzEiIHkxPSIyMC42OSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iNDMuMzEiIHgyPSIyMC42OSIgeTE9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups').replace(me.hotspot.id, ''));
			me._ht_info.style.zIndex='-1';
		}
		me._info_hs_popup_close.onmouseenter=function (e) {
			me._info_hs_popup_close__img.style.visibility='hidden';
			me._info_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_hs_popup_close']=true;
		}
		me._info_hs_popup_close.onmouseleave=function (e) {
			me._info_hs_popup_close__img.style.visibility='inherit';
			me._info_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_hs_popup_close']=false;
		}
		me._info_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup.appendChild(me._info_hs_popup_close);
		me._ht_info.appendChild(me._info_hs_popup);
		el=me._ht_info_container=document.createElement('div');
		el.ggId="ht_info_container";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) == -1))
				)
			) {
				player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='1';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
		}
		me._ht_info_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_container']=true;
			me._ht_info_title.logicBlock_visible();
		}
		me._ht_info_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_container']=false;
			me._ht_info_title.logicBlock_visible();
		}
		me._ht_info_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_title=document.createElement('div');
		els=me._ht_info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 32px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_container'] == true)) && 
				((me.hotspot.customimage == "")) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_title.style.transition='';
				if (me._ht_info_title.ggCurrentLogicStateVisible == 0) {
					me._ht_info_title.style.visibility=(Number(me._ht_info_title.style.opacity)>0||!me._ht_info_title.style.opacity)?'inherit':'hidden';
					me._ht_info_title.ggVisible=true;
				}
				else {
					me._ht_info_title.style.visibility="hidden";
					me._ht_info_title.ggVisible=false;
				}
			}
		}
		me._ht_info_title.logicBlock_visible();
		me._ht_info_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_container.appendChild(me._ht_info_title);
		el=me._ht_info_bg_shadow=document.createElement('div');
		els=me._ht_info_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_bg_shadow";
		el.ggDx=3;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 12px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_bg_shadow.style.transition='';
				if (me._ht_info_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_info_bg_shadow.style.visibility="hidden";
					me._ht_info_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_info_bg_shadow.style.visibility=(Number(me._ht_info_bg_shadow.style.opacity)>0||!me._ht_info_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_info_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_info_bg_shadow.logicBlock_visible();
		me._ht_info_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_container.appendChild(me._ht_info_bg_shadow);
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=0;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 9px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_info_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_info_bg.style.transition='background-color 0s';
				if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_info_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_info_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_info_bg.logicBlock_backgroundcolor();
		me._ht_info_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_bg']=true;
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_bg']=false;
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIyMC44NCIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4Ii8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2'+
			'U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4MT0iMzIiIHgyPSIzMiIgeTE9IjMxLjUiIHkyPSI0Ny41Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMiIgY3k9IjIwLjgiIHI9IjEuMyIvPgogIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIzMiIgeDI9IjMyIiB5MT0iMzEuNSIgeTI9IjQ3LjUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.onmouseenter=function (e) {
			me._ht_info_icon__img.style.visibility='hidden';
			me._ht_info_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_icon']=true;
		}
		me._ht_info_icon.onmouseleave=function (e) {
			me._ht_info_icon__img.style.visibility='inherit';
			me._ht_info_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_icon']=false;
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon);
		me._ht_info_container.appendChild(me._ht_info_bg);
		me._ht_info.appendChild(me._ht_info_container);
		el=me._ht_info_container_close=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_info_container_close";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_container_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_container_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_container_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_container_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_container_close.style.transition='';
				if (me._ht_info_container_close.ggCurrentLogicStateVisible == 0) {
					me._ht_info_container_close.style.visibility=(Number(me._ht_info_container_close.style.opacity)>0||!me._ht_info_container_close.style.opacity)?'inherit':'hidden';
					me._ht_info_container_close.ggVisible=true;
				}
				else {
					me._ht_info_container_close.style.visibility="hidden";
					me._ht_info_container_close.ggVisible=false;
				}
			}
		}
		me._ht_info_container_close.logicBlock_visible();
		me._ht_info_container_close.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) != -1))
				)
			) {
				player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups').replace("<"+me.hotspot.id+">", ''));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
			}
		}
		me._ht_info_container_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_container_close);
		me._ht_info.logicBlock_visible();
		me.elementMouseOver['ht_info']=false;
		me._info_hs_popup.logicBlock_visible();
		me.elementMouseOver['info_hs_popup_close']=false;
		me.elementMouseOver['ht_info_container']=false;
		me._ht_info_title.logicBlock_visible();
		me._ht_info_bg_shadow.logicBlock_visible();
		me._ht_info_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_info_bg']=false;
		me.elementMouseOver['ht_info_icon']=false;
		me._ht_info_container_close.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_info_title.logicBlock_visible();
				me._ht_info_bg_shadow.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._info_hs_popup.logicBlock_visible();
				player.setVariableValue('vis_info_hs_popups', "");
				me._ht_info_title.logicBlock_visible();
				me._ht_info_bg_shadow.logicBlock_visible();
				me._ht_info_container_close.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._info_hs_popup.logicBlock_visible();
				me._ht_info_title.logicBlock_visible();
				me._ht_info_bg_shadow.logicBlock_visible();
				me._ht_info_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_hs_popups=function() {
				me._info_hs_popup.logicBlock_visible();
				me._ht_info_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 294px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._pdf_hs_popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_7 = setInterval(() => {
					if (skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_hs_popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_7);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._pdf_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._pdf_hs_popup_title.ggUpdateText();
				skin._pdf_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_8 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_8);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pdf']=false;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_title=document.createElement('div');
		els=me._ht_pdf_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_pdf_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_title.style.transition='';
				if (me._ht_pdf_title.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_title.style.visibility=(Number(me._ht_pdf_title.style.opacity)>0||!me._ht_pdf_title.style.opacity)?'inherit':'hidden';
					me._ht_pdf_title.ggVisible=true;
				}
				else {
					me._ht_pdf_title.style.visibility="hidden";
					me._ht_pdf_title.ggVisible=false;
				}
			}
		}
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_title);
		el=me._ht_pdf_bg_shadow=document.createElement('div');
		els=me._ht_pdf_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_pdf_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_bg_shadow";
		el.ggDx=3;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg_shadow.style.transition='';
				if (me._ht_pdf_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg_shadow.style.visibility="hidden";
					me._ht_pdf_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_pdf_bg_shadow.style.visibility=(Number(me._ht_pdf_bg_shadow.style.opacity)>0||!me._ht_pdf_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg_shadow.logicBlock_visible();
		me._ht_pdf_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_bg_shadow);
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='background-color 0s';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_pdf_bg.style.transition='background-color 0s';
				if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_pdf_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_pdf_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		me._ht_pdf_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_pdf_bg']=true;
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf_bg']=false;
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gcG9pbnRzPSIzNiAxNiAyMCAxNiAyMCA0OCA0NCA0OCA0NCAyNCAzNiAxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4Ii8+CiAgPHBvbHlsaW5lIH'+
			'BvaW50cz0iMzYgMTYgMzYgMjQgNDQgMjQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_pdf_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjM2LDE2IDIwLDE2IDIwLDQ4IDQ0LDQ4IDQ0LDI0ICAiLz4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIzNiwxNiAzNiwyNCA0NCwy'+
			'NCAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_pdf_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.onmouseenter=function (e) {
			me._ht_pdf_icon__img.style.visibility='hidden';
			me._ht_pdf_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_pdf_icon']=true;
		}
		me._ht_pdf_icon.onmouseleave=function (e) {
			me._ht_pdf_icon__img.style.visibility='inherit';
			me._ht_pdf_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_pdf_icon']=false;
		}
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon);
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_bg_shadow.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_pdf_bg']=false;
		me.elementMouseOver['ht_pdf_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg_shadow.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg_shadow.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg_shadow.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 734px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_file_hs_popup_vid.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_file_hs_popup_vid";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_title=document.createElement('div');
		els=me._ht_video_file_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_video_file_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_title.style.transition='';
				if (me._ht_video_file_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_title.style.visibility=(Number(me._ht_video_file_title.style.opacity)>0||!me._ht_video_file_title.style.opacity)?'inherit':'hidden';
					me._ht_video_file_title.ggVisible=true;
				}
				else {
					me._ht_video_file_title.style.visibility="hidden";
					me._ht_video_file_title.ggVisible=false;
				}
			}
		}
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_title);
		el=me._ht_video_file_bg_shadow=document.createElement('div');
		els=me._ht_video_file_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_file_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_bg_shadow";
		el.ggDx=3;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_bg_shadow.style.transition='';
				if (me._ht_video_file_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_bg_shadow.style.visibility="hidden";
					me._ht_video_file_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_video_file_bg_shadow.style.visibility=(Number(me._ht_video_file_bg_shadow.style.opacity)>0||!me._ht_video_file_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_video_file_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_video_file_bg_shadow.logicBlock_visible();
		me._ht_video_file_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_bg_shadow);
		el=me._ht_video_file_bg=document.createElement('div');
		el.ggId="ht_video_file_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_bg.style.transition='background-color 0s';
				if (me._ht_video_file_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_bg.style.visibility="hidden";
					me._ht_video_file_bg.ggVisible=false;
				}
				else {
					me._ht_video_file_bg.style.visibility=(Number(me._ht_video_file_bg.style.opacity)>0||!me._ht_video_file_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_file_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_file_bg.style.transition='background-color 0s';
				if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_file_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_file_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		me._ht_video_file_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_file_bg']=true;
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file_bg']=false;
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_icon=document.createElement('div');
		els=me._ht_video_file_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojZTZlNmU2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_file_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon.onmouseenter=function (e) {
			me._ht_video_file_icon__img.style.visibility='hidden';
			me._ht_video_file_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_icon']=true;
		}
		me._ht_video_file_icon.onmouseleave=function (e) {
			me._ht_video_file_icon__img.style.visibility='inherit';
			me._ht_video_file_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_icon']=false;
		}
		me._ht_video_file_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_icon);
		me._ht_video_file.appendChild(me._ht_video_file_bg);
		el=me._ht_video_file_custom_image=document.createElement('div');
		els=me._ht_video_file_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_file_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_file_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_file_custom_image.ggAltText));
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_file_custom_image.ggText_untranslated = img;
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_file_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_file_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_file_custom_image.ggSubElement.src='';
			me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_file_custom_image.ggText != player._(me._ht_video_file_custom_image.ggText_untranslated)) {
				me._ht_video_file_custom_image.ggText = player._(me._ht_video_file_custom_image.ggText_untranslated);
				me._ht_video_file_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_file_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_custom_image.style.transition='';
				if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_custom_image.style.visibility=(Number(me._ht_video_file_custom_image.style.opacity)>0||!me._ht_video_file_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
					me._ht_video_file_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_file_custom_image.style.visibility="hidden";
					me._ht_video_file_custom_image.ggSubElement.src='';
					me._ht_video_file_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_file_custom_image.logicBlock_visible();
		me._ht_video_file_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_file_custom_image.clientWidth;
			var parentHeight = me._ht_video_file_custom_image.clientHeight;
			var img = me._ht_video_file_custom_image__img;
			var aspectRatioDiv = me._ht_video_file_custom_image.clientWidth / me._ht_video_file_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentWidth < me._ht_video_file_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_file_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_file_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentHeight < me._ht_video_file_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_file_custom_image.scrollTop=currentHeight / 2 - me._ht_video_file_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_custom_image);
		me._ht_video_file.logicBlock_visible();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_bg_shadow.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_file_bg']=false;
		me.elementMouseOver['ht_video_file_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_file_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_file_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_file_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_file_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_file_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg_shadow.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg_shadow.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg_shadow.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 734px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_url_hs_popup_vid.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_url_hs_popup_vid";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_title=document.createElement('div');
		els=me._ht_video_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_video_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_title.style.transition='';
				if (me._ht_video_url_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_title.style.visibility=(Number(me._ht_video_url_title.style.opacity)>0||!me._ht_video_url_title.style.opacity)?'inherit':'hidden';
					me._ht_video_url_title.ggVisible=true;
				}
				else {
					me._ht_video_url_title.style.visibility="hidden";
					me._ht_video_url_title.ggVisible=false;
				}
			}
		}
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_title);
		el=me._ht_video_url_bg_shadow=document.createElement('div');
		els=me._ht_video_url_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_url_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_url_bg_shadow";
		el.ggDx=3;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_bg_shadow.style.transition='';
				if (me._ht_video_url_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_bg_shadow.style.visibility="hidden";
					me._ht_video_url_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_video_url_bg_shadow.style.visibility=(Number(me._ht_video_url_bg_shadow.style.opacity)>0||!me._ht_video_url_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_video_url_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_video_url_bg_shadow.logicBlock_visible();
		me._ht_video_url_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_bg_shadow);
		el=me._ht_video_url_bg=document.createElement('div');
		el.ggId="ht_video_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_bg.style.transition='background-color 0s';
				if (me._ht_video_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_bg.style.visibility="hidden";
					me._ht_video_url_bg.ggVisible=false;
				}
				else {
					me._ht_video_url_bg.style.visibility=(Number(me._ht_video_url_bg.style.opacity)>0||!me._ht_video_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_url_bg.style.transition='background-color 0s';
				if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_url_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_url_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		me._ht_video_url_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_url_bg']=true;
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url_bg']=false;
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_icon=document.createElement('div');
		els=me._ht_video_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojZTZlNmU2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon.onmouseenter=function (e) {
			me._ht_video_url_icon__img.style.visibility='hidden';
			me._ht_video_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_icon']=true;
		}
		me._ht_video_url_icon.onmouseleave=function (e) {
			me._ht_video_url_icon__img.style.visibility='inherit';
			me._ht_video_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_icon']=false;
		}
		me._ht_video_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_icon);
		me._ht_video_url.appendChild(me._ht_video_url_bg);
		el=me._ht_video_url_custom_image=document.createElement('div');
		els=me._ht_video_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_url_custom_image.ggAltText));
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_url_custom_image.ggText_untranslated = img;
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_url_custom_image.ggSubElement.src='';
			me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_url_custom_image.ggText != player._(me._ht_video_url_custom_image.ggText_untranslated)) {
				me._ht_video_url_custom_image.ggText = player._(me._ht_video_url_custom_image.ggText_untranslated);
				me._ht_video_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_custom_image.style.transition='';
				if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_custom_image.style.visibility=(Number(me._ht_video_url_custom_image.style.opacity)>0||!me._ht_video_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
					me._ht_video_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_url_custom_image.style.visibility="hidden";
					me._ht_video_url_custom_image.ggSubElement.src='';
					me._ht_video_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_url_custom_image.logicBlock_visible();
		me._ht_video_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_url_custom_image.clientWidth;
			var parentHeight = me._ht_video_url_custom_image.clientHeight;
			var img = me._ht_video_url_custom_image__img;
			var aspectRatioDiv = me._ht_video_url_custom_image.clientWidth / me._ht_video_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentWidth < me._ht_video_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentHeight < me._ht_video_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_url_custom_image.scrollTop=currentHeight / 2 - me._ht_video_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_custom_image);
		me._ht_video_url.logicBlock_visible();
		me.elementMouseOver['ht_video_url']=false;
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_bg_shadow.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_url_bg']=false;
		me.elementMouseOver['ht_video_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg_shadow.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg_shadow.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg_shadow.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 624px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_vimeo_hs_popup_vid.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_title=document.createElement('div');
		els=me._ht_video_vimeo_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_video_vimeo_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_title.style.transition='';
				if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_title.style.visibility=(Number(me._ht_video_vimeo_title.style.opacity)>0||!me._ht_video_vimeo_title.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_title.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_title.style.visibility="hidden";
					me._ht_video_vimeo_title.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_title);
		el=me._ht_video_vimeo_bg_shadow=document.createElement('div');
		els=me._ht_video_vimeo_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_vimeo_bg_shadow";
		el.ggDx=3;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_bg_shadow.style.transition='';
				if (me._ht_video_vimeo_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_bg_shadow.style.visibility="hidden";
					me._ht_video_vimeo_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_bg_shadow.style.visibility=(Number(me._ht_video_vimeo_bg_shadow.style.opacity)>0||!me._ht_video_vimeo_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_bg_shadow.logicBlock_visible();
		me._ht_video_vimeo_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_bg_shadow);
		el=me._ht_video_vimeo_bg=document.createElement('div');
		el.ggId="ht_video_vimeo_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_bg.style.transition='background-color 0s';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_bg.style.visibility="hidden";
					me._ht_video_vimeo_bg.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_bg.style.visibility=(Number(me._ht_video_vimeo_bg.style.opacity)>0||!me._ht_video_vimeo_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_vimeo_bg.style.transition='background-color 0s';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		me._ht_video_vimeo_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=true;
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=false;
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_icon=document.createElement('div');
		els=me._ht_video_vimeo_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojZTZlNmU2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon.onmouseenter=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='hidden';
			me._ht_video_vimeo_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_icon']=true;
		}
		me._ht_video_vimeo_icon.onmouseleave=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='inherit';
			me._ht_video_vimeo_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_icon']=false;
		}
		me._ht_video_vimeo_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_icon);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_bg);
		el=me._ht_video_vimeo_custom_image=document.createElement('div');
		els=me._ht_video_vimeo_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_vimeo_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_vimeo_custom_image.ggAltText));
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_vimeo_custom_image.ggText_untranslated = img;
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.src='';
			me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_vimeo_custom_image.ggText != player._(me._ht_video_vimeo_custom_image.ggText_untranslated)) {
				me._ht_video_vimeo_custom_image.ggText = player._(me._ht_video_vimeo_custom_image.ggText_untranslated);
				me._ht_video_vimeo_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_vimeo_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_custom_image.style.transition='';
				if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_custom_image.style.visibility=(Number(me._ht_video_vimeo_custom_image.style.opacity)>0||!me._ht_video_vimeo_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
					me._ht_video_vimeo_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_custom_image.style.visibility="hidden";
					me._ht_video_vimeo_custom_image.ggSubElement.src='';
					me._ht_video_vimeo_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
		me._ht_video_vimeo_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_vimeo_custom_image.clientWidth;
			var parentHeight = me._ht_video_vimeo_custom_image.clientHeight;
			var img = me._ht_video_vimeo_custom_image__img;
			var aspectRatioDiv = me._ht_video_vimeo_custom_image.clientWidth / me._ht_video_vimeo_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentWidth < me._ht_video_vimeo_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_vimeo_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_vimeo_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentHeight < me._ht_video_vimeo_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_vimeo_custom_image.scrollTop=currentHeight / 2 - me._ht_video_vimeo_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_custom_image);
		me._ht_video_vimeo.logicBlock_visible();
		me.elementMouseOver['ht_video_vimeo']=false;
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_bg_shadow.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_vimeo_bg']=false;
		me.elementMouseOver['ht_video_vimeo_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_vimeo_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_vimeo_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_vimeo_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_vimeo_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg_shadow.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg_shadow.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg_shadow.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.userdata;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 514px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_youtube_hs_popup_vid.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_title=document.createElement('div');
		els=me._ht_video_youtube_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_title.ggUpdateText();
		player.addListener('configloaded', function() {
			me._ht_video_youtube_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_title.style.transition='';
				if (me._ht_video_youtube_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_title.style.visibility=(Number(me._ht_video_youtube_title.style.opacity)>0||!me._ht_video_youtube_title.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_title.ggVisible=true;
				}
				else {
					me._ht_video_youtube_title.style.visibility="hidden";
					me._ht_video_youtube_title.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_title);
		el=me._ht_video_youtube_bg_shadow=document.createElement('div');
		els=me._ht_video_youtube_bg_shadow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NiA4NzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg2IDg3IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KIDxnPgogIDxyYWRpYWxHcmFkaWVudCBjeD0iNDIuNTEyNSIgY3k9IjUxLjgyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjQ4OTY1OWUtMTEgLTEgLTEgLTQuNDg5NjU5ZS0xMSA5NC44MjUgODYuMDEyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHI9IjQ2LjY4NzUiPgogICA8c3RvcCBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuNzUiIHN0eWxlPSJzdG9wLWNv'+
			'bG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMy43LDYwLjlsMTYuMSwxNmMxNy43LDE3LjcsNDYuNCwxNy43LDY0LjEtMC4xYzE3LjYtMTcuNywxNy42LTQ2LjQtMC4xLTY0bC0xNi0xNkgwLjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_youtube_bg_shadow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_bg_shadow";
		el.ggDx=3;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg_shadow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_bg_shadow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_bg_shadow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_bg_shadow.style.transition='';
				if (me._ht_video_youtube_bg_shadow.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_bg_shadow.style.visibility="hidden";
					me._ht_video_youtube_bg_shadow.ggVisible=false;
				}
				else {
					me._ht_video_youtube_bg_shadow.style.visibility=(Number(me._ht_video_youtube_bg_shadow.style.opacity)>0||!me._ht_video_youtube_bg_shadow.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_bg_shadow.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_bg_shadow.logicBlock_visible();
		me._ht_video_youtube_bg_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_bg_shadow);
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_bg.style.transition='background-color 0s';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_bg.style.visibility="hidden";
					me._ht_video_youtube_bg.ggVisible=false;
				}
				else {
					me._ht_video_youtube_bg.style.visibility=(Number(me._ht_video_youtube_bg.style.opacity)>0||!me._ht_video_youtube_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_youtube_bg.style.transition='background-color 0s';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		me._ht_video_youtube_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=true;
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=false;
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojZTZlNmU2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.onmouseenter=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='hidden';
			me._ht_video_youtube_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_icon']=true;
		}
		me._ht_video_youtube_icon.onmouseleave=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='inherit';
			me._ht_video_youtube_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_icon']=false;
		}
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_icon);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_custom_image=document.createElement('div');
		els=me._ht_video_youtube_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_youtube_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_youtube_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_youtube_custom_image.ggAltText));
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_youtube_custom_image.ggText_untranslated = img;
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_youtube_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.src='';
			me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_youtube_custom_image.ggText != player._(me._ht_video_youtube_custom_image.ggText_untranslated)) {
				me._ht_video_youtube_custom_image.ggText = player._(me._ht_video_youtube_custom_image.ggText_untranslated);
				me._ht_video_youtube_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_youtube_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_custom_image.style.transition='';
				if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_custom_image.style.visibility=(Number(me._ht_video_youtube_custom_image.style.opacity)>0||!me._ht_video_youtube_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
					me._ht_video_youtube_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_youtube_custom_image.style.visibility="hidden";
					me._ht_video_youtube_custom_image.ggSubElement.src='';
					me._ht_video_youtube_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
		me._ht_video_youtube_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_youtube_custom_image.clientWidth;
			var parentHeight = me._ht_video_youtube_custom_image.clientHeight;
			var img = me._ht_video_youtube_custom_image__img;
			var aspectRatioDiv = me._ht_video_youtube_custom_image.clientWidth / me._ht_video_youtube_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentWidth < me._ht_video_youtube_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_youtube_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_youtube_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentHeight < me._ht_video_youtube_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_youtube_custom_image.scrollTop=currentHeight / 2 - me._ht_video_youtube_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_custom_image);
		me._ht_video_youtube.logicBlock_visible();
		me.elementMouseOver['ht_video_youtube']=false;
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_bg_shadow.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_youtube_bg']=false;
		me.elementMouseOver['ht_video_youtube_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_youtube_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_youtube_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_youtube_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_youtube_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg_shadow.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg_shadow.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg_shadow.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._controller_zoom_in_bg.ggUpdateConditionTimer();
		me._controller_zoom_out_bg.ggUpdateConditionTimer();
		me._controller_move_right_singlerow.ggUpdateConditionTimer();
		me._controller_move_left_singlerow.ggUpdateConditionTimer();
		me._controller_move_left_bg.ggUpdateConditionTimer();
		me._controller_move_down_bg.ggUpdateConditionTimer();
		me._controller_move_right_bg.ggUpdateConditionTimer();
		me._controller_move_up_bg.ggUpdateConditionTimer();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressedText) {
				case 'Shift':
					if (
	(
		((player.canZoomIn() == true))
	)
) {
	player.changeZoom(-0.5,true);
}
					break;
				case 'Alt':
					if (
	(
		((player.canZoomOut() == true))
	)
) {
	player.changeZoom(0.5,true);
}
					break;
				case 'ArrowLeft':
					if (
	(
		((player.canPanLeft() == true))
	)
) {
	player.changePanLog(0.3,true);
}
					break;
				case 'ArrowUp':
					if (
	(
		((player.canTiltUp() == true))
	)
) {
	player.changeTiltLog(0.3,true);
}
					break;
				case 'ArrowRight':
					if (
	(
		((player.canPanRight() == true))
	)
) {
	player.changePanLog(-0.3,true);
}
					break;
				case 'ArrowDown':
					if (
	(
		((player.canTiltDown() == true))
	)
) {
	player.changeTiltLog(-0.3,true);
}
					break;
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #999; } .ggdefaulthotspot { font-family: "Open Sans"; font-size: 15px; -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .open_sans { font-family: "Open Sans"; } .ggskin_text>div::-webkit-scrollbar { width: 4px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Open Sans"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/open-sans-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/open-sans-latin-600.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 700; src: local(""), url("$(skinbase)fonts/open-sans-latin-700.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keydown', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = e.keyCode;
		me.skinKeyPressedText = e.key;
	});
	document.addEventListener('keyup', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = 0;
		me.skinKeyPressedText = '';
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};