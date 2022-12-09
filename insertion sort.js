function iS(a) {
    for( i = 1; i < a.length; i++){
       c = a[i]
       j = i - 1
      while(j >= 0 && a[j] > c){
        a[j + 1] = a[j]
        j--
      }
      a[j + 1] = c
    }
    
    return a
  }

  //one line:
  iS=a=>{for(i=1;i<a.length;i++){c=a[i];j=i-1;while(j>=0&&a[j]>c){a[j+1]=a[j];j--;}a[j+1]=c}return a}
  

 //advantages

// It, like other quadratic sorting algorithms, is efficient for small data sets.
// It just necessitates a constant amount of O(1) extra memory space.
// It works well with data sets that have been sorted in a significant way.
// It does not affect the relative order of elements with the same key.

//disadvantages
//The insertion sort exhibits the worst-case time complexity of O(n2)