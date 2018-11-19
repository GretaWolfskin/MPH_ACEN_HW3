/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope Public
 */
define(['N/ui/dialog', 'N/ui/message'],
/**
 * @param {dialog} dialog
 * @param {message} message
 */
function(dialog, message) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {

    }

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(scriptContext) {

    }

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {

    }

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(scriptContext) {

    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(scriptContext) {

    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(scriptContext) {

      	var stFieldId = scriptContext.fieldId;
    	var recCurrentRecord = scriptContext.currentRecord; //our purchase order
      
      	if (stFieldId == 'memo') {
            
          	var stMemo = recCurrentRecord.getValue({
              	fieldId : stFieldId // 'memo'
            });
          
          	if (stMemo != '') {
	        	alert('Leave the memo field empty, please!');
              	return false;
            }
        }
      	else if (stFieldId == 'custbody_acen_hw1_employee_study_durat') {
          	
          	var stStudyDuration = recCurrentRecord.getValue({
              	fieldId : stFieldId // 'custbody_acen_hw1_employee_study_durat'
            });
          
	        //type is always number by definition
          	if (stStudyDuration != '') {
              
              	if (stStudyDuration < 0 || stStudyDuration > 15) {
                  alert('Nobody can study for so long... you must be lying!');
                  	return false;
                }
             	else if (stStudyDuration < 4) {
                    alert('You are just beginning your studies, right?');
                }
              	else if (stStudyDuration >= 4 && stStudyDuration < 6) {
                  	alert('Finishing your diploma thesis? Good luck!');
                }
              	else if (stStudyDuration <= 15) {
                  	alert('Uh, how many titles do you have?');
                }
            }
        }

        return true;
    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(scriptContext) {

    }

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {

    }

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {

    }

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord(scriptContext) {

    	var recCurrentRecord = scriptContext.currentRecord; //our purchase order

      	var stCurrency = recCurrentRecord.getText({
          	fieldId : 'currency'
        });
      
      	if (stCurrency == 'USD') {
          	var errorMessage = message.create({
            	title : 'cannot save the order',
                message : 'saving prevented by 415144',
                type: message.Type.ERROR
            });
            errorMessage.show({
              duration: 5000
            });
          
          	return false;
        }
      	else if (stCurrency == 'EUR') {
          	recCurrentRecord.setValue({
              	fieldId : 'department',
              	value : '2'
            });
        }
      
      	return true;
    }

    return {
        //pageInit: pageInit,
        //fieldChanged: fieldChanged,
        //postSourcing: postSourcing,
        //sublistChanged: sublistChanged,
        //lineInit: lineInit,
        validateField: validateField,
        //validateLine: validateLine,
        //validateInsert: validateInsert,
        //validateDelete: validateDelete,
        saveRecord: saveRecord
    };
    
});
