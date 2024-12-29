---
layout: ../../../layouts/PostsLayout.astro
title: 'Binary search - part 1'
pubDate: 2024-12-29
description: 'Implementing binary search.'
author: 'j4vierb'
image:
  url: 'https://media.geeksforgeeks.org/wp-content/uploads/20240506155201/binnary-search-.webp'
  alt: 'binary search tree'
tags: ["competitive programming"]
---

# Binary search

The following algorithm read the lenght $n$ of the array, sorts it and then finds the element. If the element isn't in the array it writes "NO", otherwise it writes "YES". 

> [!important]
> Note that it was included `#include<bits/stdc++.h>`. Header that already imports some of the most used libraries in c++ for competitive programming.

```cpp
#include<bits/stdc++.h>
using namespace std;

int main() {
  int n; cin >> n;
  int a[n];
  for(int i = 0; i < n; i++)
    cin >> a[i];

  sort(a, a + (sizeof(a) / sizeof(a[0])));

  int x; cin >> x;

  bool ok = false;
  
  int l = 0, r = n - 1;
  while(r >= l) {
    int mid = (l + r) / 2;

    if(mid > x) {
      r = m - 1;
    } else if(mid < x) {
      l = m + 1;
    } else {
      ok = true;
      break;
    }
  }

  if(ok) cout << "YES\n";
  else cout << "NO\n";

  return 0;
}

```