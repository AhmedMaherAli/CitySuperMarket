using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public class GenericSpecifications<T> where T : ModelBase
    {
        private Expression<Func<T, bool>> criteria ;
        private Expression<Func<T, object>> orderByExpression ;
        private List<string> includes ;
        public string SortingType { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }
        public bool EnablePagging { get; set; }

        public Expression<Func<T, bool>> Criteria { 
            get {return criteria;}
            set {criteria = value;}
        }
        public Expression<Func<T, object>> OrderByExpression
        {
            get { return orderByExpression; }
            set { orderByExpression = value; }
        }
        public List<string> Includes {
            get { return includes; }
            set { includes = value; } 
        }

        public GenericSpecifications(Expression<Func<T, bool>> expression = null,string sort=null, List<string> includes = null)
        {
            this.criteria = expression;
            this.includes = includes;
            this.orderByExpression = null;
            
        }

        public string ValidateSortType(string sort)
        {
            if (sort != null)
            {
                int desc = sort.IndexOf("Desc");
                if (desc != -1)
                {
                    sort = sort.Substring(0, desc);
                    SortingType = "Desc";
                }
            }
            return sort;
        }
        public void ApplyPagging(int skip, int take)
        {
            Skip = skip;
            Take = take;
            EnablePagging = true;
        }
    }
}
