<template>
<transition name="modal">
	<div class="vue-modal-mask">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header pb-1">
					<slot name="header"></slot>
					<button type="button" class="close" @click="$emit('close')">
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div class="modal-body py-1">
					<slot name="body"></slot>
				</div>
				<div class="modal-footer py-1 bg-light">
					<button type="button" class="btn" @click="$emit('close')">Close</button>
					<button type="button" class="btn btn-orange text-white" v-if="action !=null" @click="action">Submit</button>
				</div>
			</div>
		</div>
	</div>
</transition>
</template>

<script>
export default {
    name: "modalComponent",
	props:{
		contact:{
			type: Object
		},
		action:{
			type:Function
		}
	},
}
</script>

<style scoped>
.vue-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  padding-top: 3%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.vue-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-footer{
	border-top:none;
}

.modal-header{
	border-bottom:none;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

ul.timeline {
    list-style-type: none;
    position: relative;
	z-index: 0;
}

ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 50;
}

ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}

ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #104d5d;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 50;
}
</style>