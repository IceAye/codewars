// ❓ DESCRIPTION:
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class,
// which is a utility class helpful for querying paging information related to an array.  The class is designed to take
// in an array of values and an integer indicating how many items will be allowed per each page. The types of values
// contained within the collection/array are not relevant.
//
// ✅ SOLUTION:
class PaginationHelper {
    constructor(collection , itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
            return -1;
        }

        return (
            this.itemsPerPage -
            Math.ceil(
                (((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) %
                this.itemsPerPage ,
            )
        );
    }

    pageIndex(itemIndex) {
        if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
            return -1;
        }

        return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
    }
}

// 📌 TESTCASE:
const helper = new PaginationHelper(["a" , "b" , "c" , "d" , "e" , "f"] , 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1