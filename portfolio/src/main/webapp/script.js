// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// limitations under the License.


function getComments() {
    console.log("fetching comments from server");
    document.getElementById("comments").innerHTML = "";

    var commentCapacity = document.getElementById("comment-number").value;
    
    fetch("/data?comment-capacity=" + commentCapacity).then(response => response.json()).then((commentsJson) => {

        console.log(commentsJson);
        const commentSectionElement= document.getElementById("comments");

        for (comment of commentsJson) {
            commentSectionElement.appendChild(createCommentElement(comment));
        }
    });
}

function createCommentElement(text) {
    const pElement = document.createElement("p");
    pElement.innerText = text;
    return pElement;
}

function deleteComments() {
    console.log("fetching deletion");
    fetch("/delete-data", { method: "post" }).then(response => console.log(response.text()));
}