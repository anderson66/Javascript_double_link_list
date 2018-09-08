doubleLink = function () {
    this.head = null;
    this.feild = null;
    this.size = 0;
    this.head = {};
    //return a empty double link list  
    this.head.next = this.head;
    this.head.before = this.head;
};

doubleLink.prototype.isBefore = function (a, b) {
    //is a before b?  
    var listItem = a;
    while (listItem != b) {
        listItem = listItem.next;
        if (listItem == this.head) {
            return false;
        }
    }
    return true;
};

doubleLink.prototype.insert = function (/*Object*/item,/*Object*/ targetItem,/*Boolen*/ before) {
    if (!targetItem) {
        var listItem = this.head.next;
        if (listItem == this.head) {
            //insert first node  
            this.head.next = item;
            this.head.before = item;
            item.before = this.head;
            item.next = this.head;
        }
        else {
            //insert node at the last position  
            listItem = this.head.before;

            listItem.next = item;
            item.before = listItem;
            this.head.before = item;
            item.next = this.head;
        }
    }
    else {
        if (!before) {
            //insert after targetItem  
            item.next = targetItem.next;
            item.next.before = item;
            targetItem.next = item;
            item.before = targetItem;

        }
        else {
            //insert before targetItem  
            item.before = targetItem.before;
            item.before.next = item;
            targetItem.before = item;
            item.next = targetItem;

        }
    }
    this.size++;

};

doubleLink.prototype.remove = function (/*Object*/item) {
    item.before.next = item.next;
    item.next.before = item.before;
    item.next = null;
    item.before = null;
    this.size--;
};

doubleLink.prototype.removeAll = function () {
    var listItem = this.head.next;
    while (listItem != this.head) {
        listItem.before = null;
        listItem = listItem.next;
        listItem.before.next = null;
    }
    listItem.before.next = null;
    this.head.next = this.head;
    this.head.before = this.head;
    this.size = 0;
};

doubleLink.prototype.size = function () {
    return this.size;
};

doubleLink.prototype.showAll = function () {
    //just for test.  
    var position = 0;
    var str = '';
    var listItem = this.head.next;
    while (listItem != null) {
        str += position + ':' + listItem.node.id + ';';
        listItem = listItem.next;
        position++;
    }
    console.info('show all:' + str);
};

//Test for double linklist.
function start() {
    var ss0 = {};
    var ss1 = {};
    var ss2 = {};
    var ss3 = {};
    var list = new doubleLink();
    list.insert(ss0);
    list.insert(ss2);
    list.insert(ss3);
    list.insert(ss1);
    console.info(list.isBefore(ss3, ss1));
}  