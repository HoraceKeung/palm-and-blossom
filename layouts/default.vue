<template>
	<div class="d-flex flex-column" style="min-height: 100vh;">
		<menu-bar/>
		<div style="flex: 1"><nuxt/></div>
		<vue-snotify></vue-snotify>
		<page-footer/>
	</div>
</template>

<script>
import MenuBar from '~/components/MenuBar'
import PageFooter from '~/components/PageFooter'
export default {
	components: {MenuBar, PageFooter}
}
</script>