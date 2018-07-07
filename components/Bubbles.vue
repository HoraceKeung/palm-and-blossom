<template>
	<div class="bubbles-container">
		<svg class="bubbles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 170">
			<g class="bubbles-large" stroke-width="4">
				<g v-for="(b,index) in b1" :key="'b1'+index">
					<g :transform="`translate(${b.x} 200)`">
						<circle :cx="b.size" :cy="b.size" :r="b.size"/>
					</g>
				</g>
			</g>
			<g class="bubbles-small" stroke-width="2">
				<g v-for="(b,index) in b2" :key="'b2'+index">
					<g :transform="`translate(${b.x} 200)`">
						<circle :cx="b.size" :cy="b.size" :r="b.size"/>
					</g>
				</g>
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	created () {
		this.init()
		this.interval = setInterval(this.init, 5000)
	},
	methods: {
		init () {
			this.b1 = []
			this.b2 = []
			for (let i = 0; i < 10; i++) {
				this.b1.push({
					size: Math.floor((Math.random() * 10) + 5),
					x: Math.floor((Math.random() * 600) + 5)
				})
				this.b2.push({
					size: Math.floor((Math.random() * 10) + 5),
					x: Math.floor((Math.random() * 600) + 5)
				})
			}
		}
	},
	data: () => ({
		b1: [],
		b2: [],
		interval: null
	}),
	beforeDestroy () { clearInterval(this.interval) }
}
</script>

<style lang="scss" scoped>
.bubbles-container {
	position: absolute;
	top: -50px;
	width: 100%;
	opacity: 0.75;
	max-height: 250px;
}

.bubbles {
	width: 100%;
	height: auto;
	
	circle {
		stroke: white;
		fill: none;
	}
	
	> g > g:nth-of-type(3n) circle {
		stroke: #87f5fb;
	}
	
	> g > g:nth-of-type(4n) circle {
		stroke: #8be8cb;
	}
	
}

.bubbles-large {
	> g {
		opacity: 0;
		will-change: transform, opacity;
	}
	g:nth-of-type(1) {
		animation: up 6.5s infinite;
		circle {
			animation: wobble 3s infinite ease-in-out;
		}
	}
	g:nth-of-type(2) {
		animation: up 5.25s 250ms infinite;
		circle {
			animation: wobble 3s infinite ease-in-out;
		}
	}
	g:nth-of-type(3) {
		animation: up 6s 750ms infinite;
		circle {
			animation: wobble 3s infinite ease-in-out;
		}

	}
	g:nth-of-type(4) {
		animation: up 5.5s 1.5s infinite;
		circle {
			animation: wobble 3s infinite ease-in-out;
		}

	}
	g:nth-of-type(5) {
		animation: up 6.5s 4s infinite;
		circle {
			animation: wobble 3s infinite ease-in-out;
		}
	}
	g:nth-of-type(6) {
		animation: up 5.13s 250ms infinite;
		circle {
			animation: wobble 3s 125ms infinite ease-in-out;
		}
	}
	g:nth-of-type(7) {
		animation: up 6.25s 350ms infinite;
		circle {
			animation: wobble 3s 325ms infinite ease-in-out;
		}
	}
	g:nth-of-type(8) {
		animation: up 7s 200ms infinite;
		circle {
			animation: wobble 3s 325ms infinite ease-in-out;
		}
	}
	g:nth-of-type(9) {
		animation: up 6.25s 233ms infinite;
		circle {
			animation: wobble 3s 275ms infinite ease-in-out;
		}

	}
	g:nth-of-type(10) {
		animation: up 6s 900ms infinite;
		circle {
			animation: wobble 2s 905ms infinite ease-in-out;
		}
	}
}

.bubbles-small {
	overflow: visible;
	> g {
		opacity: 0;
		will-change: transform, opacity;
	}
	g circle {
		transform: scale(0);
	}
	g:nth-of-type(1) {
		animation: up 5.25s infinite;
		circle {
			animation: wobble 3s infinite ease-in-out;
		}
	}
	g:nth-of-type(2) {
		animation: up 5.75s infinite;
		circle {
			animation: wobble 3s infinite ease-in-out;
		}
	}
	g:nth-of-type(3) {
		animation: up 5.25s 250ms infinite;
		circle {
			animation: wobble 3s 250ms infinite ease-in-out;
		}
	}
	g:nth-of-type(4) {
		animation: up 5.75s 325ms infinite;
		circle {
			animation: wobble 3s 325ms infinite ease-in-out;
		}
	}
	g:nth-of-type(5) {
		animation: up 6s 125ms infinite;
		circle {
			animation: wobble 3s 250ms infinite ease-in-out;
		}
	}
	g:nth-of-type(6) {
		animation: up 5.13s 250ms infinite;
		circle {
			animation: wobble 3s 125ms infinite ease-in-out;
		}
	}
	g:nth-of-type(7) {
		animation: up 6.25s 350ms infinite;
		circle {
			animation: wobble 3s 325ms infinite ease-in-out;
		}
	}
	g:nth-of-type(8) {
		animation: up 7s 200ms infinite;
		circle {
			animation: wobble 3s 325ms infinite ease-in-out;
		}
	}
	g:nth-of-type(9) {
		animation: up 6.25s 233ms infinite;
		circle {
			animation: wobble 3s 275ms infinite ease-in-out;
		}

	}
	g:nth-of-type(10) {
		animation: up 6s 900ms infinite;
		circle {
			animation: wobble 2s 905ms infinite ease-in-out;
		}
	}
}

@keyframes wobble {
	
	33% {
		transform: translateX(-50px);
	}
	
	66% {
		transform: translateX(50px);
	}
	
}

@keyframes up {

	0% {
		opacity: 0;
	}
	
	10%, 90% {
		opacity: 1;
	}
	
	100% {
		opacity: 0;
		transform: translateY(-50px);
	}
	
}
</style>
