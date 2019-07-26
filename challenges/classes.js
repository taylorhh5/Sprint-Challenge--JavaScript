// 1. Copy and paste your prototype in here and refactor into class syntax.

class CubeMaker {
    constructor (attributes) {
      this.le = attributes.le,
      this.wi = attributes.wi,
      this.he = attributes.he
    }
    
      volume() {
        return (this.le * this.wi * this.he)
      }
    
      surfaceArea() {
        return 2* (this.le * this.wi + this.le * this.he + this.wi * this.he)
      }
    
    }



// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.