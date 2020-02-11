		function appendChild(parentNode,nodeName,className,idName,innerHTML,width,padding) {
			var childNode = document.createElement(nodeName);
				if(className) childNode.className = className;
				if(idName) childNode.id = idName;
				if(innerHTML) childNode.innerHTML = innerHTML;
				if(width) childNode.style.width = width;
				if(padding) childNode.style.padding = padding;
				parentNode.appendChild(childNode);
				return childNode;
		}