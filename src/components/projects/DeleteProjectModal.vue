<template>
	<b-modal
		id="delete-project-modal"
		ref="delete-project-modal"
		okTitle="Delete"
		okVariant="danger"
		@ok="onSubmit"
		:propProject="propProject"
	>
		<h5 class="mb-4">{{ propProject.projectDescription }}</h5>
		<p>Are you sure you want to delete this project?</p>
		<p class="mb-4">This action cannot be undone.</p>
	</b-modal>
</template>
<script>
import { mapActions } from "vuex";
export default {
	name: "DeleteProjectModal",

	props: {
		propProject: {},
	},

	methods: {
		...mapActions(["deleteProject"]),

		onSubmit() {
			this.deleteProject(this.propProject.projectId);
		},
	},
};
</script>
<style></style>